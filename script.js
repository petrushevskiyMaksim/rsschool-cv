const burgerButton = document.querySelector('.button-burger');
const burgerMenu = document.querySelector('.menu-burger');
const burgerMenuList = document.querySelector('.nav-burger-list');

const body = document.body;

burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('open-menu');
    burgerMenu.classList.toggle('open');
    body.classList.toggle('hidden');
});

burgerMenuList.addEventListener('click', function () {
    burgerButton.classList.remove('open-menu');
    burgerMenu.classList.remove('open');
    body.classList.remove('hidden');
});
