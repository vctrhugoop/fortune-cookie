export const screenOne = document.querySelector('.screen-one');
export const screenTwo = document.querySelector('.screen-two');

export function hiddenScreen() {
  screenOne.classList.toggle('hide');
  screenTwo.classList.toggle('hide');
}
