import { getLucky } from './api.js';
import { hiddenScreen } from './utils.js';

const btnCookie = document.querySelector('.btn-cookie');
const btnAgain = document.querySelector('.btn-again');

function handleClick(e) {
  hiddenScreen();
  getLucky();
}

btnCookie.addEventListener('click', handleClick);
btnAgain.addEventListener('click', hiddenScreen);

document.addEventListener('keydown', e => {
  if (e.key == 'Enter' && screenOne.classList.contains('hide')) {
    handleClick();
  } else if (e.key == 'Enter' && screenTwo.classList.contains('hide')) {
    hiddenScreen();
  }
});
