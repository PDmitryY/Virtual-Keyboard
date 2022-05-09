// const keyLang = {
//   'en': {
//     'default': ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
//     'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
//     'Caps Lock', 'a', 's', 'f', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ENTER',
//     'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control',
//     'Win', 'Alt', 'Space', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control ',
//     ],
//     'shift': ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'
//     ],
//   },
//   ru: {
//     'default': ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
//     'Tab', 'й', 'ц', 'у', 'к', 'е',
//     'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п',
//     'р', 'о', 'л', 'д', 'ж', "э", 'ENTER',
//     'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 'Control',
//     'Win', 'Alt', 'Space', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control ',
//     ],
//     'shift': ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'
//     ],
//   },
// };

const keyLang = {
  en: {
    default: {
      Backquote: '`',
      Digit1: '1',
      Digit2: '2',
      Digit3: '3',
      Digit4: '4',
      Digit5: '5',
      Digit6: '6',
      Digit7: '7',
      Digit8: '8',
      Digit9: '9',
      Digit0: '0',
      Minus: '-',
      Equal: '=',
      Backspace: 'Backspace',
      Tab: 'Tab',
      KeyQ: 'q',
      KeyW: 'w',
      KeyE: 'e',
      KeyR: 'r',
      KeyT: 't',
      KeyY: 'y',
      KeyU: 'u',
      KeyI: 'i',
      KeyO: 'o',
      KeyP: 'p',
      BracketLeft: '[',
      BracketRight: ']',
      Backslash: '\\',
      Delete: 'DEL',
      CapsLock: 'Caps Lock',
      KeyA: 'a',
      KeyS: 's',
      KeyD: 'd',
      KeyF: 'f',
      KeyG: 'g',
      KeyH: 'h',
      KeyJ: 'j',
      KeyK: 'k',
      KeyL: 'l',
      Semicolon: ';',
      Quote: "'",
      Enter: 'ENTER',
      ShiftLeft: 'Shift',
      KeyZ: 'z',
      KeyX: 'x',
      KeyC: 'c',
      KeyV: 'v',
      KeyB: 'b',
      KeyN: 'n',
      KeyM: 'm',
      Comma: ',',
      Period: '.',
      Slash: '/',
      ArrowUp: '',
      ShiftRight: 'Shift',
      ControlLeft: 'Ctrl',
      MetaLeft: 'Win',
      AltLeft: 'Alt',
      Space: '',
      AltRight: 'Alt',
      ArrowLeft: '',
      ArrowDown: '',
      ArrowRight: '',
      ControlRight: 'Ctrl',
    },
    shift: {
      Backquote: '~',
      Digit1: '!',
      Digit2: '@',
      Digit3: '#',
      Digit4: '$',
      Digit5: '%',
      Digit6: '^',
      Digit7: '&',
      Digit8: '*',
      Digit9: '(',
      Digit0: ')',
      Minus: '_',
      Equal: '+',
    },
  },
  ru: {
    default: {
      Backquote: 'ё',
      Digit1: '1',
      Digit2: '2',
      Digit3: '3',
      Digit4: '4',
      Digit5: '5',
      Digit6: '6',
      Digit7: '7',
      Digit8: '8',
      Digit9: '9',
      Digit0: '0',
      Minus: '-',
      Equal: '=',
      Backspace: 'Backspace',
      Tab: 'Tab',
      KeyQ: 'й',
      KeyW: 'ц',
      KeyE: 'у',
      KeyR: 'к',
      KeyT: 'е',
      KeyY: 'н',
      KeyU: 'г',
      KeyI: 'ш',
      KeyO: 'щ',
      KeyP: 'з',
      BracketLeft: 'х',
      BracketRight: 'ъ',
      Backslash: '\\',
      Delete: 'DEL',
      CapsLock: 'Caps Lock',
      KeyA: 'ф',
      KeyS: 'ы',
      KeyD: 'в',
      KeyF: 'а',
      KeyG: 'п',
      KeyH: 'р',
      KeyJ: 'о',
      KeyK: 'л',
      KeyL: 'д',
      Semicolon: 'ж',
      Quote: 'э',
      Enter: 'ENTER',
      ShiftLeft: 'Shift',
      KeyZ: 'я',
      KeyX: 'ч',
      KeyC: 'с',
      KeyV: 'м',
      KeyB: 'и',
      KeyN: 'т',
      KeyM: 'ь',
      Comma: 'б',
      Period: 'ю',
      Slash: '.',
      ArrowUp: '',
      ShiftRight: 'Shift',
      ControlLeft: 'Ctrl',
      MetaLeft: 'Win',
      AltLeft: 'Alt',
      Space: '',
      AltRight: 'Alt',
      ArrowLeft: '',
      ArrowDown: '',
      ArrowRight: '',
      ControlRight: 'Ctrl',
    },
    shift: {
      Backquote: 'Ё',
      Digit1: '!',
      Digit2: '@',
      Digit3: '№',
      Digit4: ';',
      Digit5: '%',
      Digit6: ':',
      Digit7: '?',
      Digit8: '*',
      Digit9: '(',
      Digit0: ')',
      Minus: '_',
      Equal: '+',
    },
  },
};

export default keyLang;
