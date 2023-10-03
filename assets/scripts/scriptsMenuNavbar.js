document.addEventListener('DOMContentLoaded', () => {
    // referencia a la imagen de perfil y al menú de configuración
    const isLoggedIn = true; // Cambia esto a true si el usuario ha iniciado sesión
    const profileImg = document.getElementById('profile-img');
    const configMenu = document.getElementById('config-menu');

    // Evento a la imagen de perfil
    profileImg.addEventListener('click', () => {
        // Cambiar visibilidad del menú de configuración 
        if (configMenu.style.display === 'block') {
            configMenu.style.display = 'none';
        } else {
            configMenu.style.display = 'block';
        }
    });

    // Para cerrar el menú de configuración haciendo clic afuera 
    document.addEventListener('click', (e) => {
        if (e.target !== profileImg && e.target !== configMenu) {
            configMenu.style.display = 'none';
        }
    });

    const menuElement = document.getElementById('config-menu'); // Elemento del menúcito

    // Referencia a la imagen de perfil del usuario
    const userProfile = document.getElementById('user-profile');

    if (isLoggedIn) {
        userProfile.src = '../assets/images/perfil.jpg';
        // Menucito para usuarios con sesión iniciada
        menuElement.innerHTML = ` 
        <ul>
            <li><a href="#">Detalles de Perfil</a></li> 
            <li><a href="#">Notificaciones</a></li> 
            <li><a href="#">Publicaciones</a></li> 
            <li><a href="#">Tus juegos</a></li>  
            <li><a href="#">Logros</a></li> 
            <hr> 
            <li><a href="#">Cuenta y seguridad</a></li> 
            <li><a href="/pages/AboutUs.html">Acerca de nosotros</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="/pages/contactanos.html">Contáctanos</a></li>
            <li><a href="#">Cerrar sesión</a></li> 
        </ul>
        `;


    } else {
        // Menucito para usuarios sin sesión
        menuElement.innerHTML = `
        <ul>
            <li><a href="/pages/AboutUs.html">Acerca de nosotros</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="/pages/contactanos.html">Contáctanos</a></li>
            <hr>
            <li><a href="../../pages/registrarUsuario.html">Registrarse</a></li>
            <li><a href="../../pages/login.html">Iniciar sesión</a></li>
        </ul>
        `;

    }
});
