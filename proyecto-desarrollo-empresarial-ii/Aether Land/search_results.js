document.addEventListener("DOMContentLoaded", function() {
    const query = localStorage.getItem("searchQuery");
    const resultsContainer = document.getElementById("search-results");

    if (!query) {
        resultsContainer.innerHTML = "<p>No se ha proporcionado ninguna búsqueda.</p>";
        return;
    }

    const results = [];

    if (query.includes("torneo")) {
        results.push({ title: "Torneos", link: "Torneos.html" });
    }

    if (query.includes("rank")) {
        results.push({ title: "Ranks", link: "TablaRanks.html" });
    }

    if (results.length > 0) {
        results.forEach(result => {
            const div = document.createElement("div");
            div.classList.add("search-result-item");
            div.innerHTML = `<h2><a href="${result.link}">${result.title}</a></h2>`;
            resultsContainer.appendChild(div);
        });
    } else {
        resultsContainer.innerHTML = `<p>No se encontraron coincidencias para "${query}".</p>`;
    }
});
