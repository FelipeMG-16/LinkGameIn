
document.addEventListener(
    'DOMContentLoaded', () => {
        // Elementos del DOM
        const profileImg = document.getElementById('profile-img');  // imagen de perfil
        const configMenu = document.getElementById('config-menu');  // menú de configuración
        
        const isLoggedIn = true;    //Prueba de sesión de usuario

        // Eventos
        profileImg.addEventListener(    // Evento para mostrar menú de configuración
            'click', () => {
                if (configMenu.style.display === 'block') {   // Si el menú está visible, se oculta
                    configMenu.style.display = 'none';
                } else {    // Si el menú está oculto, se muestra
                    configMenu.style.display = 'block';
                }
            }
        );

        if (isLoggedIn) {   // Menu para usuarios con sesión iniciada
            profileImg.innerHTML = `
            <img src="../assets/images/perfil.jpg" alt="" class="border border-dark perfil" id="profile-img">
            <span class="position-absolute bottom-0 start-0 p-2 bg-success border border-dark rounded-circle"></span>
            `;
            configMenu.innerHTML = `
            <ul>
                <li><a href="#">Detalles de Perfil</a></li> 
                <li><a href="#">Notificaciónes</a></li> 
                <li><a href="#">Publicaciónes</a></li> 
                <li><a href="#">Tus juegos</a></li>  
                <li><a href="#">Logros</a></li> 
                <hr> 
                <li><a href="#">Cuenta y seguridad</a></li> 
                <li><a href="/pages/AboutUs.html">Acerca de nosotros</a></li>
                <li><a href="/pages/Terminosycondiciones.html">Términos y condiciones</a></li>
                <li><a href="/pages/contactanos.html">Contáctanos</a></li>
                <li><a href="#">Cerrar sesión</a></li> 
                </ul>
            `;
        } else { // Menu para usuarios sin sesión iniciada
            profileImg.innerHTML = `
            <img src="../assets/images/usuario.png" alt="" class="border border-dark perfil" id="profile-img">
            `;
            configMenu.innerHTML = `
            <ul>
                <li><a href="/pages/AboutUs.html">Acerca de nosotros</a></li>
                <li><a href="/pages/Terminosycondiciones.html">Términos y condiciones</a></li>
                <li><a href="/pages/contactanos.html">Contáctanos</a></li>
                <hr>
                <li><a href="/pages/registrarUsuario.html">Registrarse</a></li>
                <li><a href="/pages/login.html">Iniciar sesión</a></li>
            </ul>
            `;
        }
    }
);

