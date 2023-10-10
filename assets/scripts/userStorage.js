document.getElementById('button-register').addEventListener('click', saveUsers);
    
let linkGamers = [];

    function saveUsers() {
        // Obtener los valores del formulario
        let name = document.getElementById('input-name').value;
        let lastName = document.getElementById('input-last-name').value;
        let nickName = document.getElementById('input-nickname').value;
        let email = document.getElementById('input-email').value;
        let password = document.getElementById('input-password').value;
        let confirmPwrd = document.getElementById('input-password-confirm').value;
        let getSupport = document.getElementById('check-get-support').checked;
        let giveSupport = document.getElementById('check-give-support').checked;
        let legalAge = document.getElementById('check-legal-age').checked;
        let termsConditions = document.getElementById('check-terms-conditions').checked;

        //Para evitar que se guarden arrays con campos vacíos
        if (name.trim() === '' || lastName.trim() === '' || nickName.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPwrd.trim() === '' || !legalAge || !termsConditions) {
            return;
        }

        if (password !== confirmPwrd) {
            alert("Las contraseñas no coinciden");
            return;
        }

        //Objeto JSON
        let userData = {
            nombre: name,
            last_name: lastName,
            nickname: nickName,
            email: email,
            password: password,
            confirm_password: confirmPwrd,
            get_support: getSupport,
            give_support: giveSupport,
            legal_age: legalAge,
            terms_conditions: termsConditions
        };

        linkGamers.push(userData);
        let linkGamersJSON = JSON.stringify(linkGamers);
        localStorage.setItem('linkGamers', linkGamersJSON);

    }
