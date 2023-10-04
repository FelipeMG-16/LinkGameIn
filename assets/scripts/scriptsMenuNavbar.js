document.addEventListener(
    'DOMContentLoaded', () => {
        // Elementos del DOM
        const profileImg = document.getElementById('profileImg');  // imagen de perfil
        const configMenu = document.getElementById('configMenu');  // menú de configuración
        const logo = document.getElementById('containerLogo');

        const isLoggedIn = true;    //Prueba de sesión de usuario

        // Eventos
        profileImg.addEventListener(    // Evento para mostrar menú de configuración
            'click', () => {
                event.stopPropagation();    // Evitar que el evento se propague
                if (configMenu.style.display === 'block') {   // Si el menú está visible, se oculta
                    configMenu.style.display = 'none';
                } else {    // Si el menú está oculto, se muestra
                    configMenu.style.display = 'block';
                }
            }
        );

        // Evento para cerrar el menú de configuración haciendo clic afuera
        document.addEventListener(
            'click', (e) => {
                if (e.target !== profileImg && e.target !== configMenu) {
                    configMenu.style.display = 'none';
                }
            }
        );

        if (isLoggedIn) {   // Opciones para usuarios con sesión iniciada
            logo.innerHTML = `
            <a class="navbar-brand" href="./dashBoard.html">
                <img src="../assets/images/Logo.svg" alt="logo" class="logo">
            </a>
            `;
            profileImg.innerHTML = `
            <img src="../assets/images/perfil.jpg" alt="" class="border border-dark perfil" id="profile-img">
            <span class="position-absolute bottom-0 start-0 p-2 bg-success border border-dark rounded-circle"></span>
            `;
            configMenu.innerHTML = `
            <ul>
                <li>
                    <a href="/pages/profile.html">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/perfil.jpg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Perfil</span>
                        </div>
                </li>
                <li>
                    <a href="#">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/notificaciones.svg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Notificaciones</span>
                        </div>
                </li>
                <li>
                    <a href="#">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/publicaciones.svg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Publicaciones</span>
                        </div>
                </li>
                <li>
                    <a href="#">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/logros.svg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Juegos y Logros</span>
                        </div>
                </li>
                <li>
                    <a href="#">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/cuentayseguridad.svg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Cuenta y Seguridad</span>
                        </div>
                </li>
                <a><hr></a>
                <li>
                    <a href="/pages/AboutUs.html">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/aboutUs.svg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Acerca de nosotros</span>
                        </div>
                </li>
                <li>
                    <a href="/pages/Terminosycondiciones.html">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/terminos.svg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Términos y condiciones</span>
                        </div>
                </li>
                <li>
                    <a href="/pages/contactanos.html">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/contactanos.svg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Contáctanos</span>
                        </div>
                </li>
                <li>
                    <a href="/pages/login.html">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/cerrarsesion.svg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Cerrar sesión</span>
                        </div>
                </li>
            </ul>
            `;
        } else { // Opciones para usuarios sin sesión iniciada
            logo.innerHTML = `
            <a class="navbar-brand" href="/index.html">
                <img src="../assets/images/Logo.svg" alt="logo" class="logo">
            </a>
            `;
            profileImg.innerHTML = `
            <img src="../assets/images/usuario.png" alt="" class="perfil" id="profile-img">
            `;
            configMenu.innerHTML = `
            <ul>
                <li>
                    <a href="/pages/AboutUs.html">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/aboutUs.svg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Acerca de nosotros</span>
                        </div>
                </li>
                <li>
                    <a href="/pages/Terminosycondiciones.html">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/terminos.svg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Términos y condiciones</span>
                        </div>
                </li>
                <li>
                    <a href="/pages/contactanos.html">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/contactanos.svg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Contáctanos</span>
                        </div>
                </li>
                <a><hr></a>
                <li>
                    <a href="/pages/registrarUsuario.html">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/publicaciones.svg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Registrarse</span>
                        </div>
                </li>
                <li>
                    <a href="/pages/login.html">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2">
                                <img src="../assets/images/cerrarsesion.svg" alt="">
                            </div>
                        <div class="col-10">
                            <span>Iniciar sesión</span>
                        </div>
                </li>
            </ul>
            `;
        }
    }
);