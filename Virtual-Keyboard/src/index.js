import keyLang from './keys.js';

const keysEn = keyLang.en.default;
const keysEnShift = keyLang['en']['shift'];
const keysRu = keyLang['ru']['default'];
const keysRuShift = keyLang['ru']['shift'];

const currentLang = keysEn;
const currentLangShift = keysEnShift;

console.log(currentLang);

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const textArea = document.createElement('div');
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
  // let i = 0;
  // currentLang.forEach((key, index) => {
  //   const keyElement = document.createElement('button');
  //   const upperKeyElement = document.createElement('div');
  //   upperKeyElement.classList.add('upperKey');
  //   keyElement.classList.add('key');
  //   keyElement.textContent = key;
  //   keyElement.dataset.key = key;
  //   // console.log(keyElement.dataset);
  //   upperKeyElement.textContent = currentLangShift[index];
  //   switch (key) {
  //     case 'Backspace':
  //       keyElement.classList.add('middle-width');
  //       break;
  //     case 'Caps Lock':
  //       keyElement.classList.add('middle-width');
  //       keyElement.classList.add('caps');
  //       keyElement.addEventListener('click', () => {
  //         keyElement.classList.toggle('active');
  //       });
  //       break;
  //     case 'ENTER':
  //       keyElement.classList.add('middle-width');
  //       break;
  //     case 'Shift':
  //       keyElement.classList.add('middle-width');
  //       break;
  //     case 'Space':
  //       keyElement.innerText = '';
  //       keyElement.classList.add('lage-width');
  //       break;
  //     case 'Control':
  //       keyElement.classList.add('bigger-width');
  //       keyElement.innerHTML = 'Ctrl';
  //       break;
  //     case 'Control ':
  //       keyElement.innerHTML = 'Ctrl';
  //       break;
  //     case 'Delete':
  //       keyElement.innerHTML = 'DEL';
  //       break;
  //     default:
  //       break;
  //   }
  //   keyboard.appendChild(keyElement);
  //   if (key === 'ArrowUp') {
  //     keyElement.innerHTML = createIconHTML('keyboard_arrow_up')
  //   }
  //   if (key === 'ArrowLeft') {
  //     keyElement.innerHTML = createIconHTML('keyboard_arrow_left')
  //   }
  //   if (key === 'ArrowDown') {
  //     keyElement.innerHTML = createIconHTML('keyboard_arrow_down')
  //   }
  //   if (key === 'ArrowRight') {
  //     keyElement.innerHTML = createIconHTML('keyboard_arrow_right')
  //   }
  //   keyElement.appendChild(upperKeyElement);
  //   keyElement.addEventListener('mousedown', () => {
  //     keyElement.classList.add('pressed');
  //   });
  //   keyElement.addEventListener('mouseup', () => {
  //     keyElement.classList.remove('pressed');
  //   });
  // });
  Object.keys(currentLang).forEach((key) => {
    const keyElement = document.createElement('button');
    const upperKeyElement = document.createElement('div');
    upperKeyElement.classList.add('upperKey');
    keyElement.classList.add('key');
    keyElement.textContent = currentLang[key];
    keyElement.dataset.key = key;
    upperKeyElement.textContent = currentLangShift[key];
    console.log(key);
    switch (key) {
      case 'Backspace':
        keyElement.classList.add('middle-width');
        break;
      case 'CapsLock':
        keyElement.classList.add('middle-width');
        keyElement.classList.add('caps');
        keyElement.addEventListener('click', () => {
          keyElement.classList.toggle('active');
        });
        break;
      case 'Enter':
        keyElement.classList.add('middle-width');
        break;
      case 'ShiftLeft':
        keyElement.classList.add('middle-width');
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
      default:
        break;
    }
    keyboard.appendChild(keyElement);
    if (key === 'ArrowUp') {
      keyElement.innerHTML = createIconHTML('keyboard_arrow_up')
    }
    if (key === 'ArrowLeft') {
      keyElement.innerHTML = createIconHTML('keyboard_arrow_left')
    }
    if (key === 'ArrowDown') {
      keyElement.innerHTML = createIconHTML('keyboard_arrow_down')
    }
    if (key === 'ArrowRight') {
      keyElement.innerHTML = createIconHTML('keyboard_arrow_right')
    }
    keyElement.appendChild(upperKeyElement);
    keyElement.addEventListener('mousedown', () => {
      document.querySelectorAll('.key').forEach((element) => {
        element.classList.remove('pressed');
      });
      keyElement.classList.add('pressed');
    });
    keyElement.addEventListener('mouseup', () => {
      keyElement.classList.remove('pressed');
    });
  });
  // for (let key in currentLang) {
  //   const keyElement = document.createElement('button');
  //   const upperKeyElement = document.createElement('div');
  //   upperKeyElement.classList.add('upperKey');
  //   keyElement.classList.add('key');
  //   keyElement.textContent = currentLang[key];
  //   keyElement.dataset.key = key;
  //   upperKeyElement.textContent = currentLangShift[key];
  //   console.log(key)
  //   switch (key) {
  //     case 'Backspace':
  //       keyElement.classList.add('middle-width');
  //       break;
  //     case 'CapsLock':
  //       keyElement.classList.add('middle-width');
  //       keyElement.classList.add('caps');
  //       keyElement.addEventListener('click', () => {
  //         keyElement.classList.toggle('active');
  //       });
  //       break;
  //     case 'Enter':
  //       keyElement.classList.add('middle-width');
  //       break;
  //     case 'ShiftLeft':
  //       keyElement.classList.add('middle-width');
  //       break;
  //     case 'ShiftRight':
  //       keyElement.classList.add('middle-width');
  //       break;
  //     case 'Space':
  //       keyElement.innerText = '';
  //       keyElement.classList.add('lage-width');
  //       break;
  //     case 'ControlLeft':
  //       keyElement.classList.add('bigger-width');
  //       keyElement.innerHTML = 'Ctrl';
  //       break;
  //     case 'Delete':
  //       keyElement.innerHTML = 'DEL';
  //       break;
  //     default:
  //       break;
  //   }
  //   keyboard.appendChild(keyElement);
  //   if (key === 'ArrowUp') {
  //     keyElement.innerHTML = createIconHTML('keyboard_arrow_up')
  //   }
  //   if (key === 'ArrowLeft') {
  //     keyElement.innerHTML = createIconHTML('keyboard_arrow_left')
  //   }
  //   if (key === 'ArrowDown') {
  //     keyElement.innerHTML = createIconHTML('keyboard_arrow_down')
  //   }
  //   if (key === 'ArrowRight') {
  //     keyElement.innerHTML = createIconHTML('keyboard_arrow_right')
  //   }
  //   keyElement.appendChild(upperKeyElement);
  //   keyElement.addEventListener('mousedown', () => {
  //     document.querySelectorAll('.key').forEach((element) => {
  //       element.classList.remove('pressed');
  //     });
  //     keyElement.classList.add('pressed');
  //   });
  //   keyElement.addEventListener('mouseup', () => {
  //     keyElement.classList.remove('pressed');
  //   });
  // }
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
});
