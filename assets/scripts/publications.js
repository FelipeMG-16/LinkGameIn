const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const postButton = document.getElementById('post-button');
const postText = document.getElementById('post-text');
const imageInput = document.getElementById('image-input');

// Selecciona todos los elementos con la clase "open-modal"
const openModalButtons = document.querySelectorAll('.open-modal');
const overlay = document.querySelector('.overlay');

// Itera a través de cada botón con la clase "open-modal"
openModalButtons.forEach((button) => {
    // Agrega un evento de clic a cada botón
    button.addEventListener('click', () => {
        // Muestra la superposición y el modal
        overlay.style.display = 'block'; // Muestra la superposición
        modal.style.display = 'block'; // Muestra el modal

        // Deshabilita el desplazamiento de la página
        document.body.style.overflow = 'hidden';
    });
});

// Obtenemos una referencia al elemento de la imagen.
const imageButton = document.getElementById('image-button');
// Agregamos un evento de escucha para el clic en la imagen.
imageButton.addEventListener('click', function () {
    // Cuando se hace clic en la imagen, activamos el input de archivo haciendo clic en él.
    imageInput.click();
});

// Manejar la publicación de contenido
postButton.addEventListener('click', () => {
    const text = postText.value;
    // Aquí puedes enviar el contenido (texto e imágenes) al servidor para su procesamiento
    // y realizar las acciones necesarias.

    // Luego, cierra el modal
    modal.style.display = 'none';
    overlay.style.display = 'none'; // Oculta el overlay

    // Restablecer el desplazamiento de la página
    document.body.style.overflow = 'auto';

    // Limpia el contenido del modal
    postText.value = '';
    imageInput.value = '';
});

// Ocultar la superposición y el modal al hacer clic en el botón de cerrar
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el modal
    overlay.style.display = 'none'; // Oculta el overlay
    modal.removeAttribute('style'); // Elimina todos los atributos de estilo del modal (opcional)

    // Restablecer el desplazamiento de la página
    document.body.style.overflow = 'auto';
});
