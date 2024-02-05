const burgerBtn = document.querySelector('.burger__btn');
const sectionBurder = document.querySelector('.section_burder');

burgerBtn.addEventListener('click', () => {
  sectionBurder.classList.toggle('none');
});
// burger change button

const radioAddress = document.querySelector('input[name="tabsChecked"]');

console.log(radioAddress);
