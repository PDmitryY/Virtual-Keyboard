import keyLang from './keys.js';

const keysEn = keyLang['en']['default'];
const keysEnShift = keyLang['en']['shift'];
const keysRu = keyLang['ru']['default'];
const keysRuShift = keyLang['ru']['shift'];

let currentLang = keysEn;
let currentLangShift = keysEnShift;

console.log(currentLang);

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const text_area = document.createElement('div');
text_area.classList.add('text_area');

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const keys = document.createElement('div');
keyboard.classList.add('keys');

document.body.appendChild(wrapper);

wrapper.appendChild(text_area);
wrapper.appendChild(keyboard);
keyboard.appendChild(keys);

function createIconHTML(icon_name) {
  return `<i class="material-icons">${icon_name}</i>`;
}

function addKeys() {
  //let i = 0;
  currentLang.forEach((key, index) => {
    const keyElement = document.createElement('button');
    const upperKeyElement = document.createElement('div');
    upperKeyElement.classList.add('upperKey');
    keyElement.classList.add('key');
    keyElement.textContent = key;
    upperKeyElement.textContent = currentLangShift[index];
    switch (key){
      case 'Backspace':
        keyElement.classList.add('middle-width');
        break;
      case 'Caps Lock':
        keyElement.classList.add('middle-width');
        keyElement.classList.add('caps');
        keyElement.addEventListener('click', () => {
          keyElement.classList.toggle('active');
        });
        break;
      case 'ENTER':
        keyElement.classList.add('middle-width');
        break;
      case 'Shift':
        keyElement.classList.add('middle-width');
        break;
      case 'Space':
        keyElement.innerText = '';
        keyElement.classList.add('lage-width');
        break;
      case 'Ctrl':
        keyElement.classList.add('bigger-width');
      break;
    }
    keyboard.appendChild(keyElement);
    if (key == 'KeyUp') {
      keyElement.innerHTML = createIconHTML('keyboard_arrow_up')
    }
    if (key == 'KeyLeft') {
      keyElement.innerHTML = createIconHTML('keyboard_arrow_left')
    }
    if (key == 'KeyDown') {
      keyElement.innerHTML = createIconHTML('keyboard_arrow_down')
    }
    if (key == 'KeyRight') {
      keyElement.innerHTML = createIconHTML('keyboard_arrow_right')
    }
    keyElement.appendChild(upperKeyElement);
    keyElement.addEventListener('mousedown', () => {
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
  //   keyElement.textContent = key;
  //   upperKeyElement.textContent = currentLangShift[key];
  //   console.log(key)
  //   switch (key){
  //     case 'Backspace':
  //       keyElement.classList.add('middle-width');
  //     case 'Caps Lock':
  //       keyElement.classList.add('middle-width');
  //     case 'ENTER':
  //       keyElement.classList.add('middle-width');
  //     case 'Shift':
  //       keyElement.classList.add('middle-width');
        
  //   }

  }


window.addEventListener("DOMContentLoaded", function () {
  addKeys();
});