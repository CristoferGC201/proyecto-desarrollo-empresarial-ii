document.addEventListener("DOMContentLoaded", function() {
    // Simula cargar las publicaciones
    const publicaciones = [
        { titulo: "Publicación 1", contenido: "Contenido de la publicación 1" },
        { titulo: "Publicación 2", contenido: "Contenido de la publicación 2" },
        { titulo: "Publicación 3", contenido: "Contenido de la publicación 3" },
        
        // Agrega más publicaciones si es necesario
    ];

    const slider = document.querySelector(".slider");

    // Renderiza las publicaciones
    publicaciones.forEach(publicacion => {
        const div = document.createElement("div");
        div.classList.add("publicacion");
        div.innerHTML = `
            <h2>${publicacion.titulo}</h2>
            <p>${publicacion.contenido}</p>
        `;
        slider.appendChild(div);
    });
});
