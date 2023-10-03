// referencia a la imagen de perfil y al menú de configuración
const profileImg = document.getElementById('profile-img');
const configMenu = document.getElementById('config-menu');

//evento a la imagen 
profileImg.addEventListener('click', () => {
    // visibilidad del menú de configuración 
    if (configMenu.style.display === 'block') {
        configMenu.style.display = 'none';
    } else {
        configMenu.style.display = 'block';
    }
});

// Para cerrar el menú de configuración haciendo clicks afuerita 
document.addEventListener('click', (e) => {
    if (e.target !== profileImg && e.target !== configMenu) {
        configMenu.style.display = 'none';
    }
});



const isLoggedIn = false; // inicio de sesión
const menuElement = document.getElementById('config-menu'); //elemento del menucito

if (isLoggedIn) {
    // Menucito para usuarios con sesión iniciada
    menuElement.innerHTML = `
    <ul>
    <li><a href="#">Detalles de Perfil</a></li> 
    <li><a href="#">Notificaciónes</a></li> 
    <li><a href="#">Publicaciónes</a></li> 
    <li><a href="#">Tus juegos</a></li>  
    <li><a href="#">Logros</a></li> 
    <hr> 
    <li><a href="#">Cuenta y seguridad</a></li> 
    <li><a href="/LinkGameIn/pages/AboutUs.html">Acerca de nosotros</a></li>
    <li><a href="#">Términos y condiciones</a></li>
    <li><a href="/LinkGameIn/pages/contactanos.html">Contáctanos</a></li>

    <li><a href="#">Cerrar sesión</a></li> 

</ul>
    `;
} else {
    // Menuito para usuarios sin sesión
    menuElement.innerHTML = `
        <ul>
        
        <li><a href="/LinkGameIn/pages/AboutUs.html">Acerca de nosotros</a></li>
        <li><a href="#">Términos y condiciones</a></li>
        <li><a href="/LinkGameIn/pages/contactanos.html">Contáctanos</a></li>
        <hr>
        <li><a href="/LinkGameIn/pages/registrarUsuario.html">Registrarse</a></li>
        <li><a href="/LinkGameIn/pages/login.html">Iniciar sesión</a></li>
        
    </ul>
    `;
}

