
function getBookTemplate(indexBook, commentsHtml, heartImg) {
    return `
        <article class="card book-card">
            <div class="card-body">
                <h2 class="card-title">${books[indexBook]["name"]}</h2>
                <p class="author">${books[indexBook]["author"]}</p>
                <p>${books[indexBook]["publishedYear"]} <span class="genre">${books[indexBook]["genre"]}</span></p>
                <div class="book-info">
                    <span class="price">${books[indexBook]["price"]} €</span>
                    <span class="likes">
                        ${books[indexBook]["likes"]}
                        <img src="${heartImg}" alt="Like" class="heart" onclick="toggleLike(${indexBook})">
                    </span>
                </div>
            </div>
            <ul class="comments">
                ${commentsHtml}
            </ul>
            <div class="comment-form">
                <input id="comment_input_${indexBook}" class="comment-input" placeholder="Schreibe dein Kommentar …">
                <button class="btn btn-primary" onclick="addComment(${indexBook})">Senden</button>
            </div>
        </article>
    `;
}


// EIN Kommentar in der Liste
function getCommentTemplate(name, comment) {
    return `<li><strong>[${name}]</strong> ${comment}</li>`;
}


// Hinweis, wenn ein Buch noch keine Kommentare hat
function getNoCommentsTemplate() {
    return `<li class="no-comments">Noch keine Kommentare</li>`;
}
