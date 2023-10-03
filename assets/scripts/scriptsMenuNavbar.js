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