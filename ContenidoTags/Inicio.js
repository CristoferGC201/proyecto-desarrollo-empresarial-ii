document.addEventListener('DOMContentLoaded', () => {
    const userId = 'user123'; // Cambiar por el ID del usuario actual o dinámico

    fetch(`/api/recommendations?userId=${userId}`)
        .then(response => response.json())
        .then(data => {
            const recommendationsContainer = document.getElementById('recommendations-container');

            data.forEach(rec => {
                const recommendationElement = document.createElement('div');
                recommendationElement.classList.add('recommendation');

                recommendationElement.innerHTML = `
                    <h3>${rec.title}</h3>
                    <p>Categoría: ${rec.category}</p>
                    <p>Etiqueta: ${rec.tag}</p>
                `;

                recommendationsContainer.appendChild(recommendationElement);
            });
        })
        .catch(error => console.error('Error fetching recommendations:', error));
});
