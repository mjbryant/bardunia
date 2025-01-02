import { useEffect } from 'react';
import { KeyCombo } from '@/types/keys';

export const useKeyCombo = (
  combo: KeyCombo,
  handler: (event: KeyboardEvent) => void
) => {
  useEffect(() => {
    const handleKeypress = (event: KeyboardEvent) => {
      const matchesKey = event.key === combo.key;
      const matchesCtrl =
        combo.ctrl === undefined || event.ctrlKey === combo.ctrl;
      const matchesShift =
        combo.shift === undefined || event.shiftKey === combo.shift;
      const matchesAlt = combo.alt === undefined || event.altKey === combo.alt;
      const matchesMeta =
        combo.meta === undefined || event.metaKey === combo.meta;

      if (
        matchesKey &&
        matchesCtrl &&
        matchesShift &&
        matchesAlt &&
        matchesMeta
      ) {
        handler(event);
      }
    };

    document.addEventListener('keydown', handleKeypress);
    return () => document.removeEventListener('keydown', handleKeypress);
  }, [combo, handler]);
};
