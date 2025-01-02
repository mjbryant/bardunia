'use client';

import React, { useEffect, useRef } from 'react';
import Konva from 'konva';

const SPRITE_WIDTH = 131;

const RUN_RIGHT = [
  // Frame 1
  ...[0, 0, SPRITE_WIDTH, SPRITE_WIDTH],
  // Frame 2
  ...[SPRITE_WIDTH, 1, SPRITE_WIDTH, SPRITE_WIDTH],
  // Frame 3
  ...[0, SPRITE_WIDTH, SPRITE_WIDTH, SPRITE_WIDTH],
  // Frame 4
  ...[SPRITE_WIDTH, SPRITE_WIDTH, SPRITE_WIDTH, SPRITE_WIDTH],
];

// Just one frame
const IDLE = [0, 0, SPRITE_WIDTH, SPRITE_WIDTH];

interface OverlayProps {
  hidden: boolean;
}

const Overlay = (props: OverlayProps) => {
  const { hidden } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stage = new Konva.Stage({
      container: container,
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    // Create the image object, assign it to the sprite, and start the animation
    const imageObj = new Image();
    imageObj.src = '/spritesheet.png';
    imageObj.onload = () => {
      const sprite = new Konva.Sprite({
        x: 0,
        y: 0,
        image: imageObj,
        animation: 'idle',
        animations: {
          runRight: RUN_RIGHT,
          idle: IDLE,
        },
        frameRate: 7,
      });

      layer.add(sprite);
      sprite.start();

      // This will be used to move the sprite
      const SPEED = 5;

      // TODO: replace with useKeyCombo

      // This is all keypress handling, and it has to live here because
      // it needs access to the sprite. But really it'd be nicer to have
      // the keypress handling separate from the rendering logic, in like
      // a controller or something.
      const keysPressed: { [key: string]: boolean } = {};
      const handleKeyDown = (e: KeyboardEvent) => {
        keysPressed[e.key] = true;

        // Update animation based on movement
        if (keysPressed['ArrowLeft'] || keysPressed['a']) {
          // Don't have a walkLeft animation yet. When we do this'll swap it in.
          // sprite.animation('walkLeft');
        } else if (keysPressed['ArrowRight'] || keysPressed['d']) {
          sprite.animation('runRight');
        }
      };

      const handleKeyUp = (e: KeyboardEvent) => {
        keysPressed[e.key] = false;

        // Return to idle if no movement keys are pressed
        if (
          !keysPressed['ArrowLeft'] &&
          !keysPressed['ArrowRight'] &&
          !keysPressed['a'] &&
          !keysPressed['d']
        ) {
          sprite.animation('idle');
        }
      };

      const anim = new Konva.Animation(() => {
        if (keysPressed['ArrowLeft'] || keysPressed['a']) {
          const newX = sprite.x() - SPEED;
          if (newX >= 0) {
            sprite.x(newX);
          }
        }
        if (keysPressed['ArrowRight'] || keysPressed['d']) {
          const newX = sprite.x() + SPEED;
          if (newX <= stage.width() - SPRITE_WIDTH) {
            sprite.x(newX);
          }
        }
        if (keysPressed['ArrowUp'] || keysPressed['w']) {
          const newY = sprite.y() - SPEED;
          if (newY >= 0) {
            sprite.y(newY);
          }
        }
        if (keysPressed['ArrowDown'] || keysPressed['s']) {
          const newY = sprite.y() + SPEED;
          if (newY <= stage.height() - SPRITE_WIDTH) {
            sprite.y(newY);
          }
        }

        return true;
      }, layer);

      anim.start();

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      // Store cleanup functions
      // BIG TODO: this needs to run the cleanup functions when the component is unmounted!!
      //   container._cleanupFunctions = () => {
      //     window.removeEventListener('keydown', handleKeyDown);
      //     window.removeEventListener('keyup', handleKeyUp);
      //     anim.stop();
      //   };
    };

    const handleResize = () => {
      stage.width(window.innerWidth);
      stage.height(window.innerHeight);

      // Here is where we might have to adjust images that are currently on the stage
      // for the new window size
    };

    window.addEventListener('resize', handleResize);

    return () => {
      stage.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-50 ${hidden && 'hidden'}`}
    />
  );
};

export default Overlay;
