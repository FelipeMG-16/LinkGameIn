const inputProfilePicture = document.getElementById('input-profile-picture');
    const imagePreview = document.getElementById('image-preview');

    inputProfilePicture.addEventListener('change', function () {
        const file = inputProfilePicture.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                imagePreview.src = e.target.result;
            };

            reader.readAsDataURL(file);
        } else {
            imagePreview.src = "../assets/images/modo-retrato.svg"; //se supone que es una imagen predeterminada
        }
    });