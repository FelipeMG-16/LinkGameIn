let contador = 1;
const textarea = document.getElementById('post-text');
const botonGuardar = document.getElementById('post-button');
const contenedorTarjetas = document.getElementById('contenedorDePublicaciones');

// Recupera las publicaciones guardadas desde el localStorage (si existen)
function cargarPublicacionesGuardadas() {
    const publicaciones = [];
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);

        if (clave.startsWith('publicacion')) {
            const publicacionJSON = localStorage.getItem(clave);
            const publicacion = JSON.parse(publicacionJSON);
            publicaciones.push({ clave, ...publicacion });
        }
    }

    // Mostrar hasta 10 publicaciones en el nuevo orden
    for (let i = 0; i < Math.min(10, publicaciones.length); i++) {
        mostrarPublicacion(publicaciones[i]);
    }
}

// Cargar publicaciones guardadas al cargar la página
cargarPublicacionesGuardadas();

// Agregar un evento de clic al botón para guardar el contenido en el localStorage y mostrarlo en una tarjeta
botonGuardar.addEventListener('click', function() {
    const contenido = textarea.value;

    const publicacion = {
        contenido: contenido,
        fecha: new Date().toLocaleString(),
    };

    const claveUnica = 'publicacion' + contador;
    contador++;

    const publicacionJSON = JSON.stringify(publicacion);
    localStorage.setItem(claveUnica, publicacionJSON);

    mostrarPublicacion({ clave: claveUnica, ...publicacion });
    textarea.value = ''; // Limpia el textarea después de guardar la publicación
});

// Función para mostrar una publicación en una tarjeta
function mostrarPublicacion(publicacion) {
    const nuevaTarjeta = document.createElement('div');
    nuevaTarjeta.classList.add('tarjeta');
    nuevaTarjeta.innerHTML = `
        <p>${publicacion.contenido}</p>
        <p>${publicacion.fecha}</p>
        <button class="eliminar" data-clave="${publicacion.clave}">Eliminar</button>
    `;

    contenedorTarjetas.appendChild(nuevaTarjeta);

    // Agregar un evento de clic al botón "Eliminar"
    const botonEliminar = nuevaTarjeta.querySelector('.eliminar');
    botonEliminar.addEventListener('click', function() {
        eliminarPublicacion(publicacion.clave);
        contenedorTarjetas.removeChild(nuevaTarjeta);
    });
}

// Función para eliminar una publicación del localStorage
function eliminarPublicacion(clave) {
    localStorage.removeItem(clave);
}
