const burgerButton = document.querySelector('.button-burger');
const burgerMenu = document.querySelector('.menu-burger');

const body = document.body;

burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('open-menu');
    burgerMenu.classList.toggle('open');
    body.classList.toggle('hidden');

    console.log(this.classList); // проверь в консоли, появляется ли класс
    console.log(headerNav.classList); // проверь в консоли, появляется ли класс
});
