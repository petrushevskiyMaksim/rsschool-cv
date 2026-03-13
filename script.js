const burgerButton = document.querySelector('.button-burger');
const burgerIcon = document.querySelector('.icon-burger');
const closeIcon = document.querySelector('.icon-close');

burgerButton.addEventListener('click', function () {
    burgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('visible');
});
