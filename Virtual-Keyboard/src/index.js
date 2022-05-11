import keyLang from './keys.js';

const keysEn = keyLang.en.default;
const keysEnShift = keyLang.en.shift;
const keysRu = keyLang.ru.default;
const keysRuShift = keyLang.ru.shift;

let currentLang;
let currentLangShift;
let lang = localStorage.getItem('lang');

if (lang) {
  lang = localStorage.getItem('lang');
} else {
  lang = 'en';
}
console.log(lang);

if (lang === 'en') {
  currentLang = keysEn;
  currentLangShift = keysEnShift;
} else {
  currentLang = keysRu;
  currentLangShift = keysRuShift;
}

// console.log(currentLang);

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const textArea = document.createElement('textarea');
textArea.classList.add('text_area');

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const keys = document.createElement('div');
keyboard.classList.add('keys');

const title = document.createElement('div');
title.classList.add('title');
title.innerText = 'Виртуальная клавиатура для Windows';

const changeLng = document.createElement('div');
changeLng.classList.add('changeLng');
changeLng.innerText = 'Смена языка производится сочетанием клавишь Shift + Ctrl';

document.body.appendChild(wrapper);

wrapper.appendChild(textArea);
wrapper.appendChild(keyboard);
keyboard.appendChild(keys);
wrapper.appendChild(title);
wrapper.appendChild(changeLng);

function createIconHTML(iconName) {
  return `<i class="material-icons">${iconName}</i>`;
}

function addKeys() {
  // currentLang = JSON.parse(localStorage.getItem('currentLang'));
  // currentLangShift = JSON.parse(localStorage.getItem('currentLangShift'));
  Object.keys(currentLang).forEach((key) => {
    const keyElement = document.createElement('button');
    const upperKeyElement = document.createElement('div');
    upperKeyElement.classList.add('upperKey');
    keyElement.classList.add('key');
    keyElement.textContent = currentLang[key];
    keyElement.dataset.key = key;
    upperKeyElement.textContent = currentLangShift[key];
    // console.log(key);
    switch (key) {
      case 'Backspace':
        keyElement.classList.add('middle-width');
        break;
      case 'CapsLock':
        keyElement.classList.add('middle-width');
        keyElement.classList.add('caps');
        keyElement.addEventListener('click', () => {
          keyElement.classList.toggle('active');
          if (keyElement.classList.contains('active')) {
            document.querySelectorAll('.key').forEach((e) => {
              // console.log(e.dataset.key.slice(0, 3));
              if (e.dataset.key.slice(0, 3) === 'Key' || e.dataset.key.slice(0, 3) === 'Bra'
              || e.dataset.key === 'Semicolon' || e.dataset.key === 'Quote' || e.dataset.key === 'Comma'
              || e.dataset.key === 'Period') {
                e.textContent = e.textContent.toUpperCase();
              }
            });
          } else {
            document.querySelectorAll('.key').forEach((e) => {
              if (e.dataset.key.slice(0, 3) === 'Key' || e.dataset.key.slice(0, 3) === 'Bra'
              || e.dataset.key === 'Semicolon' || e.dataset.key === 'Quote' || e.dataset.key === 'Comma'
              || e.dataset.key === 'Period') {
                e.textContent = e.textContent.toLowerCase();
              }
            });
          }
        });
        break;
      case 'Enter':
        keyElement.classList.add('middle-width');
        break;
      case 'ShiftLeft':
        keyElement.classList.add('middle-width');
        // keyElement.addEventListener('click', () => {
        //   const temp = currentLang;
        //   currentLang = currentLangShift;
        //   currentLangShift = temp;
        //   keyboard.innerHTML = '';
        //   addKeys();
        // });
        break;
      case 'ShiftRight':
        keyElement.classList.add('middle-width');
        break;
      case 'Space':
        keyElement.innerText = '';
        keyElement.classList.add('lage-width');
        break;
      case 'ControlLeft':
        keyElement.classList.add('bigger-width');
        keyElement.innerHTML = 'Ctrl';
        break;
      case 'Delete':
        keyElement.innerHTML = 'DEL';
        break;
      case 'ArrowUp':
        keyElement.innerHTML = createIconHTML('keyboard_arrow_up');
        break;
      case 'ArrowLeft':
        keyElement.innerHTML = createIconHTML('keyboard_arrow_left');
        break;
      case 'ArrowDown':
        keyElement.innerHTML = createIconHTML('keyboard_arrow_down');
        break;
      case 'ArrowRight':
        keyElement.innerHTML = createIconHTML('keyboard_arrow_right');
        break;
      default:
        break;
    }
    keyboard.appendChild(keyElement);
    if (keyElement.dataset.key.slice(0, 3) === 'Dig') {
      console.log(keyElement.dataset.key.slice(0, 3));
      keyElement.appendChild(upperKeyElement);
    }
    keyElement.addEventListener('mousedown', () => {
      keyElement.classList.add('pressed');
      textArea.focus();
      if (keyElement.dataset.key !== 'Backspace' && keyElement.dataset.key !== 'Tab'
      && keyElement.dataset.key !== 'Delete' && keyElement.dataset.key !== 'CapsLock'
      && keyElement.dataset.key !== 'Enter' && keyElement.dataset.key !== 'ShiftLeft'
      && keyElement.dataset.key !== 'ShiftRight' && keyElement.dataset.key !== 'ControlLeft'
      && keyElement.dataset.key !== 'MetaLeft' && keyElement.dataset.key !== 'AltLeft'
      && keyElement.dataset.key !== 'Space' && keyElement.dataset.key !== 'AltRight'
      && keyElement.dataset.key !== 'ControlRight') {
        if (keyElement.dataset.key.slice(0, 3) === 'Dig') {
          const position = textArea.selectionStart;
          textArea.value = textArea.value.slice(0, position) + keyElement.dataset.key.slice(5, 6)
          + textArea.value.slice(textArea.selectionEnd);
        } else {
          const position = textArea.selectionStart;
          textArea.value = textArea.value.slice(0, position) + keyElement.textContent
          + textArea.value.slice(textArea.selectionEnd);
        }
      }
    });
    keyElement.addEventListener('mouseup', () => {
      keyElement.classList.remove('pressed');
      textArea.focus();
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  addKeys();
});

window.addEventListener('keydown', (e) => {
  // console.log(e.code);
  document.querySelectorAll('.key').forEach((element) => {
    element.classList.remove('pressed');
  });
  document.querySelector(`[data-key = '${e.code}']`).classList.add('pressed');
  if (e.code === 'CapsLock') {
    document.querySelector('[data-key="CapsLock"]').classList.toggle('active');
    if (document.querySelector('[data-key="CapsLock"]').classList.contains('active')) {
      document.querySelectorAll('.key').forEach((e) => {
        // console.log(e.dataset.key.slice(0, 3));
        if (e.dataset.key.slice(0, 3) === 'Key' || e.dataset.key.slice(0, 3) === 'Bra'
        || e.dataset.key === 'Semicolon' || e.dataset.key === 'Quote' || e.dataset.key === 'Comma'
        || e.dataset.key === 'Period') {
          e.textContent = e.textContent.toUpperCase();
        }
      });
    } else {
      document.querySelectorAll('.key').forEach((e) => {
        if (e.dataset.key.slice(0, 3) === 'Key' || e.dataset.key.slice(0, 3) === 'Bra'
        || e.dataset.key === 'Semicolon' || e.dataset.key === 'Quote' || e.dataset.key === 'Comma'
        || e.dataset.key === 'Period') {
          e.textContent = e.textContent.toLowerCase();
        }
      });
    }
  }
  textArea.focus();
  if (e.code === 'ShiftLeft') {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'ControlLeft') {
        if (currentLang === keysEn) {
          localStorage.setItem('lang', 'ru');
          currentLang = keysRu;
          currentLangShift = keysRuShift;
          keyboard.innerHTML = '';
          addKeys();
        } else {
          localStorage.setItem('lang', 'en');
          currentLang = keysEn;
          currentLangShift = keysEnShift;
          keyboard.innerHTML = '';
          addKeys();
        }
      }
    });
  }
});

window.addEventListener('keyup', (e) => {
  // console.log(e.code);
  document.querySelector(`[data-key = '${e.code}']`).classList.remove('pressed');
  // document.querySelectorAll('.key').forEach((e) => {
  //   console.log(e.code.toString().slice(0, 2));
  //   if (e.code.toString().slice(0, 2) === 'Key') {
  //     console.log(e.innerText);
  //   }
  //   e.innerText = e.innerText.toUpperCase();
  // });
});
