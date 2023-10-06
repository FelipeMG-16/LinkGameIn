(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')
    const userTest = {
        email: "user@gmail.com",
        password: "contraseña123",
    };

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                
            } else {
                let email = document.getElementById('input-email').value;
                let password = document.getElementById('input-password').value;

                if (email === userTest.email && password === userTest.password) {
                    localStorage.setItem('user', JSON.stringify(userTest));
                    setTimeout(function () {
                        window.location.href = "dashBoard.html";
                    }, 300);
                }
            }

            form.classList.add('was-validated');
        }, false)
    })
})()