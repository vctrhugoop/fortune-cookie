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

btnCookie.addEventListener('click', () => {
  screenOne.classList.toggle('hide');
  screenTwo.classList.toggle('hide');
  getLucky();
});

btnAgain.addEventListener('click', () => {
  screenOne.classList.toggle('hide');
  screenTwo.classList.toggle('hide');
});
