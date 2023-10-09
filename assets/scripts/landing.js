const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');

let currentPosition = 0;
const cardWidth = document.querySelector('.card').offsetWidth + 20; // Ancho de la tarjeta incluyendo margen

nextButton.addEventListener('click', () => {
    currentPosition -= cardWidth;
    if (currentPosition < -(carousel.scrollWidth - carousel.offsetWidth)) {
        currentPosition = 0;
    }
    carousel.style.transform = `translateX(${currentPosition}px)`;
});

prevButton.addEventListener('click', () => {
    currentPosition += cardWidth;
    if (currentPosition > 0) {
        currentPosition = -(carousel.scrollWidth - carousel.offsetWidth);
    }
    carousel.style.transform = `translateX(${currentPosition}px)`;
});
