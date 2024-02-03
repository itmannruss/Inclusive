const burgerBtn = document.querySelector('.burger__btn');
const sectionBurder = document.querySelector('.section_burder');

burgerBtn.addEventListener('click', () => {
  sectionBurder.classList.toggle('none');
});
