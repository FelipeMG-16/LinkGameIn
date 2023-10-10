// Selección de los botones de control del carrusel
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

// Selección del elemento del carrusel
const carousel = document.querySelector('.carousel-inner');

// Inicialización de la posición actual y ancho de las tarjetas
let currentPosition = 0;
const cardWidth = document.querySelector('.carousel-item').offsetWidth;

// Manejo del evento de clic en el botón "Siguiente"
nextButton.addEventListener('click', () => {
    currentPosition -= cardWidth;
    if (currentPosition < -(cardWidth * 2)) {
        currentPosition = 0;
    }
    carousel.style.transform = `translateX(${currentPosition}px)`;
});

// Manejo del evento de clic en el botón "Anterior"
prevButton.addEventListener('click', () => {
    currentPosition += cardWidth;
    if (currentPosition > 0) {
        currentPosition = -(cardWidth * 2);
    }
    carousel.style.transform = `translateX(${currentPosition}px)`;
});
