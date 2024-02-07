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
const recipient = document.querySelector('.recipient');
const formTitle = document.querySelector('.form__title');
const pn = document.querySelector('.pn');
const pn2 = document.querySelector('.pn2');
const pickUp = document.querySelector('.pick-up');
const formText = document.querySelector('.form__text');
const pt = document.querySelector('.pt');

function removeAddress(address) {
  // pointList.value = 'Название ТК';
  address.classList.add('none');
  lineInput.classList.add('none');
}
function showAddress(address) {
  // pointList.value = 'Название ТК';
  address.classList.remove('none');
  // lineInput.classList.add('none');
}

radioAddress.addEventListener('click', () => {
  showAddress(boxAddress);

  showAddress(boxAddress);
  showAddress(pn);
  showAddress(pn2);
  showAddress(pickUp);
  showAddress(formText);
  showAddress(pt);
});
pickup.addEventListener('click', () => {
  removeAddress(boxAddress);
  removeAddress(recipient);

  removeAddress(boxAddress);
  removeAddress(pn);
  removeAddress(pn2);
  removeAddress(pickUp);
  removeAddress(formText);
  removeAddress(pt);
  showAddress(lineInput);
});
terminal.addEventListener('click', () => {
  // removeAddress(boxAddress);

  removeAddress(boxAddress);
  showAddress(pn);
  showAddress(pn2);
  showAddress(pickUp);
  showAddress(formText);
  showAddress(pt);
});

// pointList.addEventListener('click', () => {
//   if (pointList.value === 'Деловые линии') {
//     removeAddress(recipient);
//     showAddress(lineInput);
//     removeAddress(boxAddress);
//   } else {
//     lineInput.classList.add('none');
//     showAddress(boxAddress);
//     showAddress(recipient);
//   }
// });
// pointList.addEventListener('click', () => {
//   if (terminal.checked) {
//     removeAddress(boxAddress);
//   } else {
//     showAddress(boxAddress);
//   }
// });

pointList.addEventListener('click', () => {
  if (pointList.value === 'Деловые линии') {
    removeAddress(boxAddress);
    removeAddress(recipient);
    showAddress(lineInput);
  } else {
    removeAddress(lineInput);
    showAddress(boxAddress);
    showAddress(recipient);
  }
});

pointList.addEventListener('click', () => {
  if (terminal.checked && pointList.value !== 'Деловые линии') {
    removeAddress(boxAddress);
    removeAddress(recipient);
  } else if (pointList.value === 'Деловые линии') {
    removeAddress(boxAddress);
    removeAddress(recipient);
    showAddress(lineInput);
  } else {
    showAddress(boxAddress);
    showAddress(recipient);
  }
});
