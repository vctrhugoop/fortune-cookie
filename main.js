const screenOne = document.querySelector('.screen-one');
const screenTwo = document.querySelector('.screen-two');
const btnCookie = document.querySelector('.btn-cookie');
const boxLucky = document.querySelector('.box-lucky');
const btnAgain = document.querySelector('.btn-again');

function getLucky(data) {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const adviceJson = data['slip'];

      boxLucky.querySelector('p').innerText = `${adviceJson['advice']}`;
    });
}

function handleClick(e) {
  hiddenScreen();
  getLucky();
}

function hiddenScreen() {
  screenOne.classList.toggle('hide');
  screenTwo.classList.toggle('hide');
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
