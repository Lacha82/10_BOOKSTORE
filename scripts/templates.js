
// Karte für EIN Buch: Bild, Info-Teil, Kommentare, Eingabefeld (bookInfoHtml und commentsHtml baut render())
function getBookTemplate(indexBook, bookInfoHtml, commentsHtml) {
    return `
        <article class="card book-card">
            <img src="${books[indexBook]["image"]}" class="card-img-top book-img" alt="Titelbild von ${books[indexBook]["name"]}">
            ${bookInfoHtml}
            <ul id="comments_${indexBook}" class="comments overflow-y-auto">${commentsHtml}</ul>
            <div class="comment-form">
                <input id="comment_input_${indexBook}" class="comment-input" placeholder="Schreibe dein Kommentar …">
                <button class="btn btn-primary" onclick="addComment(${indexBook})">Senden</button>
            </div>
        </article>
    `;
}


// Info-Teil der Karte: Titel, Autor, Jahr, Genre, Preis, Likes mit Herz (likesHtml baut render())
function getBookInfoTemplate(indexBook, likesHtml) {
    return `
        <div class="card-body">
            <h2 class="card-title">${books[indexBook]["name"]}</h2>
            <p class="author">${books[indexBook]["author"]}</p>
            <p>${books[indexBook]["publishedYear"]} <span class="genre">${books[indexBook]["genre"]}</span></p>
            <div class="book-info">
                <span class="price">${books[indexBook]["price"]} €</span>
                <span id="likes_${indexBook}" class="likes">${likesHtml}</span>
            </div>
        </div>
    `;
}


// Likes von EINEM Buch: Zahl und Herz (wird beim Start und nach jedem Klick aufs Herz gebaut)
function getLikesTemplate(indexBook, heartImg) {
    return `${books[indexBook]["likes"]} <img src="${heartImg}" alt="Like" class="heart" onclick="toggleLike(${indexBook})">`;
}


// EIN Kommentar in der Liste
function getCommentTemplate(name, comment) {
    return `<li><strong>[${name}]</strong> ${comment}</li>`;
}


// Hinweis, wenn ein Buch noch keine Kommentare hat
function getNoCommentsTemplate() {
    return `<li class="no-comments">Noch keine Kommentare</li>`;
}
