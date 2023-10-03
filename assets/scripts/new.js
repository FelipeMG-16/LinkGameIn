
const isLoggedIn = true;

const profile = document.getElementById('containerprofile');
if (isLoggedIn) {
    // Menucito para usuarios con sesión iniciada
    profile.innerHTML = "<img src='../assets/images/perfil.jpg' id='profile-img' class='border border-dark perfil'> ";
} else {
    // Menuito para usuarios sin sesión
    profile.innerHTML = "<img src='./assets/images/usuario.png' alt='Perfil' id='profile-img'>";

}
