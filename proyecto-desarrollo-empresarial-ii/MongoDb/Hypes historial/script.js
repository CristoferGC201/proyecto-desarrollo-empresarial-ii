document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        { id: 1, title: "Publicación 1", content: "Contenido de la publicación 1" },
        { id: 2, title: "Publicación 2", content: "Contenido de la publicación 2" },
        { id: 3, title: "Publicación 3", content: "Contenido de la publicación 3" },
        { id: 4, title: "Hola mundo", content: "Hola mundo" } // Nueva publicación
    ];

    const likedPosts = [];

    function renderPosts() {
        const postsContainer = document.getElementById('posts');
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button class="like-button" data-id="${post.id}">Like</button>
            `;
            postsContainer.appendChild(postElement);
        });

        document.querySelectorAll('.like-button').forEach(button => {
            button.addEventListener('click', handleLikeButtonClick);
        });
    }

    function handleLikeButtonClick(event) {
        const postId = parseInt(event.target.getAttribute('data-id'));
        const post = posts.find(p => p.id === postId);
        
        if (!likedPosts.includes(post)) {
            likedPosts.push(post);
            event.target.classList.add('liked');
            renderLikedPosts();
        }
    }

    function renderLikedPosts() {
        const likedPostsContainer = document.getElementById('liked-posts');
        likedPostsContainer.innerHTML = '';
        likedPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            `;
            likedPostsContainer.appendChild(postElement);
        });
    }

    renderPosts();
});
