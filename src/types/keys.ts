type ModifierKey =
  | 'Control' // NOT 'Ctrl'
  | 'Shift'
  | 'Alt' // 'Option' on Mac
  | 'Meta' // Windows key on PC, Command key on Mac
  | 'CapsLock';

type NavigationKey =
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Home'
  | 'End'
  | 'PageUp'
  | 'PageDown'
  | 'Tab';

type EditingKey =
  | 'Backspace'
  | 'Delete'
  | 'Enter'
  | 'Escape'
  | 'Space'
  | 'Insert';

type FunctionKey =
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12';

type LetterKey =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z';

type NumberKey = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

// Main type that combines all key types
export type KeyboardKey =
  | ModifierKey
  | NavigationKey
  | EditingKey
  | FunctionKey
  | LetterKey
  | NumberKey;

// Helper type for checking modifier states
export interface ModifierState {
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  metaKey: boolean;
}

// TODO: delete these if I don't end up using them
const isModifierPressed = (event: KeyboardEvent): boolean => {
  return event.ctrlKey || event.shiftKey || event.altKey || event.metaKey;
};

const handleKeypress = (key: KeyboardKey, modifiers: ModifierState) => {
  // Type-safe key handling
};

// Common key combinations type
export type KeyCombo = {
  key: KeyboardKey;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  meta?: boolean;
};
