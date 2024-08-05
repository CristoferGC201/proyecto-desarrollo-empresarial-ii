// Cambia la paleta de colores
function changePalette(palette) {
    // Elimina todas las clases de paleta de colores del body
    document.body.classList.remove('default', 'pastel', 'oscuro', 'vibrante');
  
    // Añade la clase de la paleta seleccionada
    document.body.classList.add(palette);
  
    // Actualiza el estilo del botón de desplegable para coincidir con la paleta actual
    const dropbtn = document.querySelector('.dropbtn');
    dropbtn.classList.remove('default', 'pastel', 'oscuro', 'vibrante');
    dropbtn.classList.add(palette);

    // Guarda la paleta seleccionada en localStorage
  localStorage.setItem('selectedPalette', palette);
  }
  
  // Maneja el despliegue del menú
  document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
  
    // Muestra u oculta el menú desplegable al hacer clic en el botón
    dropbtn.addEventListener('click', () => {
      dropdownContent.style.display =
        dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
  
    // Cierra el menú desplegable si se hace clic fuera de él
    window.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) {
        dropdownContent.style.display = 'none';
      }
    });
  
    // Recupera la paleta seleccionada de localStorage
    const savedPalette = localStorage.getItem('selectedPalette') || 'default';
    changePalette(savedPalette);

  });
  