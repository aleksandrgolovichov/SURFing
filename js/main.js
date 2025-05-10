const burger = document.querySelector('.menu_btn');
const overlay = document.querySelector('.menu');

burger.addEventListener('click', ()=> {
  overlay.classList.toggle('menu__open');
});