const burgerButton = document?.querySelector('.burger-wrapper');
const burgerMenu = document?.querySelector('.burger-menu');
const body = document.body;


burgerButton?.addEventListener('click',() => {
  burgerMenu.classList.toggle('burger-menu__visible');
  body?.classList.toggle('stop-scroll');
})