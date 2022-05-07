import keyLang from './keys.js';

const keysEn = keyLang['en']['default'];
const keysEnShift = keyLang['en']['shift'];

console.log(keysEnShift);

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

function addKeys() {
  for (let key in keysEn) {
    const keyElement = document.createElement('button');
    const upperKeyElement = document.createElement('div');
    upperKeyElement.classList.add('upperKey');
    keyElement.classList.add('key');
    keyElement.textContent = key;
    upperKeyElement.textContent = keysEnShift[key];
    switch (key){
      case 'Backspace':
        keyElement.classList.add('middle-width');
      case 'Caps Lock':
        keyElement.classList.add('middle-width');
      case '`':
        keyElement.setAttribute('order', 1)
    }
    keyboard.appendChild(keyElement);
    keyElement.appendChild(upperKeyElement);
  }
}

window.addEventListener("DOMContentLoaded", function () {
  addKeys();
});