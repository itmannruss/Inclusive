const burgerBtn = document.querySelector('.burger__btn');
const sectionBurder = document.querySelector('.section_burder');

burgerBtn.addEventListener('click', () => {
  sectionBurder.classList.toggle('none');
});
// burger change button
// ----------------------------------------------------------------
const radioAddress = document.querySelector('#radio-address');
const pickup = document.querySelector('#pickup');
const terminal = document.querySelector('#terminal');
const boxAddress = document.querySelector('.address');
const pointList = document.querySelector('.pick-up__select');
const lineInput = document.querySelector('.line-input');

console.log(lineInput);

function removeAddress(address) {
  pointList.value = 'Название ТК';
  address.classList.add('none');
  lineInput.classList.add('none');
}
function showAddress(address) {
  pointList.value = 'Название ТК';
  address.classList.remove('none');
  lineInput.classList.add('none');
}

radioAddress.addEventListener('click', () => {
  showAddress(boxAddress);
});
pickup.addEventListener('click', () => {
  removeAddress(boxAddress);
});
terminal.addEventListener('click', () => {
  removeAddress(boxAddress);
});

pointList.addEventListener('click', () => {
  if (pointList.value === 'Деловые линии') {
    lineInput.classList.remove('none');
    removeAddress(boxAddress);
  } else {
    lineInput.classList.add('none');
    showAddress(boxAddress);
  }
});
