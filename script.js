const burgerButton = document.querySelector('.button-burger');
const burgerIcon = document.querySelector('.icon-burger');
const closeIcon = document.querySelector('.icon-close');

burgerButton.addEventListener('click', function () {
    this.classList.toggle('open');
    console.log(this.classList); // проверь в консоли, появляется ли класс
});
