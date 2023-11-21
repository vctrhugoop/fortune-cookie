const boxLucky = document.querySelector('.box-lucky');

export function getLucky(data) {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const adviceJson = data['slip'];

      boxLucky.querySelector('p').innerText = `${adviceJson['advice']}`;
    });
}
