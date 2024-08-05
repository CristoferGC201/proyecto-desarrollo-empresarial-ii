<<<<<<< HEAD
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que el formulario se envíe inmediatamente

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var passwordPattern = /^(?=.*[A-Z])(?=.*[@#$%^&+=!*]).*$/;

    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    if (!passwordPattern.test(password)) {
        alert('La contraseña debe contener al menos una letra mayúscula y un carácter especial.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Genera un salt y encripta la contraseña
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            console.error(err);
            return;
        }

        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                console.error(err);
                return;
            }

            // En este punto, `hash` es la contraseña encriptada
            console.log('Contraseña encriptada:', hash);

            //aqui se enviaria la contraseña ya encriptada en la base de datos
            // podemos enviar los datos usando fetch() o AJAX, dependiendo de los stack (eso aun me falta investigarlo)
            var formData = new FormData();
            formData.append('username', document.getElementById('username').value);
            formData.append('email', document.getElementById('email').value);
            formData.append('password', hash);

            fetch('/ruta-al-servidor', {
                method: 'POST',
                body: formData
            }).then(response => response.json())
              .then(data => {
                  if (data.success) {
                      alert('Registro exitoso!');
                  } else {
                      alert('Error en el registro.');
                  }
              }).catch(error => {
                  console.error('Error:', error);
              });
        });
    });
});

=======
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que el formulario se envíe inmediatamente

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var passwordPattern = /^(?=.*[A-Z])(?=.*[@#$%^&+=!*]).*$/;

    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    if (!passwordPattern.test(password)) {
        alert('La contraseña debe contener al menos una letra mayúscula y un carácter especial.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Genera un salt y encripta la contraseña
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            console.error(err);
            return;
        }

        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                console.error(err);
                return;
            }

            // En este punto, `hash` es la contraseña encriptada
            console.log('Contraseña encriptada:', hash);

            //aqui se enviaria la contraseña ya encriptada en la base de datos
            // podemos enviar los datos usando fetch() o AJAX, dependiendo de los stack (eso aun me falta investigarlo)
            var formData = new FormData();
            formData.append('username', document.getElementById('username').value);
            formData.append('email', document.getElementById('email').value);
            formData.append('password', hash);

            fetch('/ruta-al-servidor', {
                method: 'POST',
                body: formData
            }).then(response => response.json())
              .then(data => {
                  if (data.success) {
                      alert('Registro exitoso!');
                  } else {
                      alert('Error en el registro.');
                  }
              }).catch(error => {
                  console.error('Error:', error);
              });
        });
    });
});

>>>>>>> b5a97c856bfa11d2c61985cd820d29fe11e6a265
