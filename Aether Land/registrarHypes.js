
    function registrarHypes(post) {
        // Obtener la fecha y hora actuales
        const fechaHoraActual = new Date();
        const fecha = fechaHoraActual.toLocaleDateString();
        const hora = fechaHoraActual.toLocaleTimeString();

        // Crear un nuevo elemento para el registro del like
        const nuevoRegistro = document.createElement("div");
        nuevoRegistro.className = "registroHypes";
        nuevoRegistro.textContent = `Hype dado a ${post} el ${fecha} a las ${hora}`;

        // Añadir el nuevo registro al área de registros
        document.getElementById("registrosHypes").appendChild(nuevoRegistro);
    }
