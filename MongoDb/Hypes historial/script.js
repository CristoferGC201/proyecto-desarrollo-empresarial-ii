const posts = [
    { id: 1, content: "Publicación 1" },
    { id: 2, content: "Publicación 2" },
    { id: 3, content: "Publicación 3" }
];

const likedPosts = [];
const reportedPosts = [];

function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <p>${post.content}</p>
            <button class="like-btn" onclick="toggleLike(${post.id})">
                ${likedPosts.includes(post.id) ? 'Te gusta' : 'Me gusta'}
            </button>
            <button class="report-btn" onclick="toggleReport(${post.id})">
                ${reportedPosts.includes(post.id) ? 'Reportado' : 'Reportar'}
            </button>
        `;
        postsContainer.appendChild(postDiv);
    });
}

function renderLikedPosts() {
    const likedPostsContainer = document.getElementById('liked-posts');
    likedPostsContainer.innerHTML = '';
    likedPosts.forEach(postId => {
        const post = posts.find(p => p.id === postId);
        const listItem = document.createElement('li');
        listItem.textContent = post.content;
        likedPostsContainer.appendChild(listItem);
    });
}

function renderReportedPosts() {
    const reportedPostsContainer = document.getElementById('reported-posts');
    reportedPostsContainer.innerHTML = '';
    reportedPosts.forEach(postId => {
        const post = posts.find(p => p.id === postId);
        const listItem = document.createElement('li');
        listItem.textContent = post.content;
        reportedPostsContainer.appendChild(listItem);
    });
}

function toggleLike(postId) {
    const postIndex = likedPosts.indexOf(postId);
    if (postIndex > -1) {
        likedPosts.splice(postIndex, 1);
    } else {
        likedPosts.push(postId);
    }
    renderPosts();
    renderLikedPosts();
}

function toggleReport(postId) {
    const postIndex = reportedPosts.indexOf(postId);
    if (postIndex > -1) {
        reportedPosts.splice(postIndex, 1);
    } else {
        reportedPosts.push(postId);
    }
    renderPosts();
    renderReportedPosts();
}

document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    renderLikedPosts();
    renderReportedPosts();
});
