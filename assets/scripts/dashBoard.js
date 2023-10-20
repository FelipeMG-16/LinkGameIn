document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtén el contenido de la publicación del campo de texto
    const contenidoPublicacion = document.querySelector('textarea').value;

    // Crea una nueva publicación
    const nuevaPublicacion = document.createElement('div');
    nuevaPublicacion.classList.add('publicacion');
    nuevaPublicacion.innerHTML = `
        <p>${contenidoPublicacion}</p>
    `;

    // Agrega una nueva "publicación" al news feed
    document.querySelector('#news-feed').appendChild(nuevaPublicacion);

    //para borrar lo dell campo de texto
    document.querySelector('textarea').value = '';
});



function abrirModal() {
    document.getElementById('miModal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
}
