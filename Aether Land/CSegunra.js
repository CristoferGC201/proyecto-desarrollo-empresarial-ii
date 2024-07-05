document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que el formulario se envíe inmediatamente

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Genera un salt y encripta la contraseña
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                console.error(err);
                return;
            }

            // En este punto, `hash` es la contraseña encriptada
            console.log('Contraseña encriptada:', hash);

            // Crea un formulario oculto para enviar la contraseña encriptada al servidor
            var form = document.createElement('form');
            form.method = 'POST';
            form.action = '/ruta-al-servidor'; // Cambia esto a la ruta de tu servidor

            var emailInput = document.createElement('input');
            emailInput.type = 'hidden';
            emailInput.name = 'email';
            emailInput.value = document.getElementById('email').value;
            form.appendChild(emailInput);

            var passwordInput = document.createElement('input');
            passwordInput.type = 'hidden';
            passwordInput.name = 'password';
            passwordInput.value = hash;
            form.appendChild(passwordInput);

            document.body.appendChild(form);
            form.submit();
        });
    });
});
