function registrarReporte() {
    // Obtener la fecha y hora actuales
    const fechaHoraActual = new Date();
    const fecha = fechaHoraActual.toLocaleDateString();
    const hora = fechaHoraActual.toLocaleTimeString();

    // Crear un nuevo elemento para el reporte
    const nuevoReporte = document.createElement("div");
    nuevoReporte.textContent = `Reporte registrado el ${fecha} a las ${hora}`;

    // Añadir el nuevo reporte al área de reportes
    document.getElementById("reportes").appendChild(nuevoReporte);
}


// Boton Para Registrar Reporte En HTML:
// <button onclick="registrarReporte()">Registrar Reporte</button>

//<!-- Área donde se mostrarán los reportes registrados EN HTML
// <div id="reportes"></div>