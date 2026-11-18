// Templates: nur return mit HTML, keine Logik (Notizblock L11)


// Karte für EIN Buch (Bootstrap 5: card, list-group, badge, input-group)
// commentsHtml und heartImg werden vorher in render() gebaut
function getBookTemplate(indexBook, commentsHtml, heartImg) {
    return `
        <div class="col">
            <article class="card h-100 book-card">
                <div class="card-body">
                    <h2 class="card-title">${books[indexBook]["name"]}</h2>
                    <p class="card-subtitle">${books[indexBook]["author"]}</p>
                    <p class="card-text">${books[indexBook]["publishedYear"]} <span class="badge text-bg-secondary">${books[indexBook]["genre"]}</span></p>
                    <div class="book-info">
                        <span class="price">${books[indexBook]["price"]} €</span>
                        <span class="likes">
                            ${books[indexBook]["likes"]}
                            <img src="${heartImg}" alt="Like" class="heart" onclick="toggleLike(${indexBook})">
                        </span>
                    </div>
                </div>
                <ul class="list-group list-group-flush comments">
                    ${commentsHtml}
                </ul>
                <div class="card-footer">
                    <div class="input-group">
                        <input id="comment_input_${indexBook}" class="form-control" placeholder="Schreibe dein Kommentar …">
                        <button class="btn btn-primary" onclick="addComment(${indexBook})">Senden</button>
                    </div>
                </div>
            </article>
        </div>
    `;
}


// EIN Kommentar in der Liste
function getCommentTemplate(name, comment) {
    return `<li class="list-group-item"><b>[${name}]</b> ${comment}</li>`;
}


// Hinweis, wenn ein Buch noch keine Kommentare hat
function getNoCommentsTemplate() {
    return `<li class="list-group-item no-comments">Noch keine Kommentare</li>`;
}
