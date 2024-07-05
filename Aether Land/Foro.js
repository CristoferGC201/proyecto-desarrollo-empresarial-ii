// Función para publicar un comentario
function postComment() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;
    if (commentText.trim() === "") return;

    const comment = {
        id: Date.now(),
        text: commentText,
        likes: 0,
        dislikes: 0,
        replies: []
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    commentInput.value = '';
    renderComments();
}

// Función para renderizar los comentarios
function renderComments() {
    const commentsContainer = document.getElementById('comments-container');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    commentsContainer.innerHTML = '';

    comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsContainer.appendChild(commentElement);
    });
}

// Función para crear un elemento de comentario
function createCommentElement(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.id = `comment-${comment.id}`;

    const commentText = document.createElement('p');
    commentText.innerText = comment.text;
    commentDiv.appendChild(commentText);

    const likeDislikeDiv = document.createElement('div');
    likeDislikeDiv.className = 'like-dislike';
    const likeButton = document.createElement('button');
    likeButton.innerText = `Me gusta (${comment.likes})`;
    likeButton.onclick = () => likeComment(comment.id);
    likeDislikeDiv.appendChild(likeButton);
    
    const dislikeButton = document.createElement('button');
    dislikeButton.innerText = `No me gusta (${comment.dislikes})`;
    dislikeButton.onclick = () => dislikeComment(comment.id);
    likeDislikeDiv.appendChild(dislikeButton);

    commentDiv.appendChild(likeDislikeDiv);

    const replyInput = document.createElement('textarea');
    replyInput.placeholder = 'Escribe una respuesta...';
    commentDiv.appendChild(replyInput);

    const replyButton = document.createElement('button');
    replyButton.innerText = 'Responder';
    replyButton.onclick = () => postReply(comment.id, replyInput.value);
    commentDiv.appendChild(replyButton);

    const repliesDiv = document.createElement('div');
    repliesDiv.className = 'comment-replies';
    comment.replies.forEach(reply => {
        const replyElement = createCommentElement(reply);
        repliesDiv.appendChild(replyElement);
    });
    commentDiv.appendChild(repliesDiv);

    return commentDiv;
}

// Función para manejar los "me gusta"
function likeComment(commentId) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        comment.likes++;
        localStorage.setItem('comments', JSON.stringify(comments));
        renderComments();
    }
}

// Función para manejar los "no me gusta"
function dislikeComment(commentId) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        comment.dislikes++;
        localStorage.setItem('comments', JSON.stringify(comments));
        renderComments();
    }
}

// Función para publicar una respuesta
function postReply(commentId, replyText) {
    if (replyText.trim() === "") return;
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        const reply = {
            id: Date.now(),
            text: replyText,
            likes: 0,
            dislikes: 0,
            replies: []
        };
        comment.replies.push(reply);
        localStorage.setItem('comments', JSON.stringify(comments));
        renderComments();
    }
}

// Renderizar los comentarios al cargar la página
window.onload = renderComments;
