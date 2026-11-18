// Die Bücher kommen aus db.js (Array "books"), die Templates aus scripts/templates.js

function init() {                                               // wird beim Laden der Seite aufgerufen (<body onload="init()">)
    render();
}


// 1. Schleife: alle Bücher als Karten anzeigen
function render() {
    let bookListRef = document.getElementById('book_list');    // 1. leere Box holen
    bookListRef.innerHTML = "";                                 // 2. leeren

    for (let indexBook = 0; indexBook < books.length; indexBook++) {   // 3. für jedes Buch
        let commentsHtml = getCommentsHtml(indexBook);                 //    Kommentare bauen (2. Schleife)
        let heartImg = books[indexBook]["liked"] ? "./img/heart-filled.png" : "./img/heart-empty.png";   // volles oder leeres Herz
        bookListRef.innerHTML += getBookTemplate(indexBook, commentsHtml, heartImg);                    // 4. Karte anhängen
    }
}


// 2. Schleife: alle Kommentare von EINEM Buch als <li> zusammenbauen
function getCommentsHtml(indexBook) {
    let comments = books[indexBook]["comments"];
    let commentsHtml = "";

    if (comments.length == 0) {                                 // keine Kommentare → Hinweis zeigen
        return getNoCommentsTemplate();
    }

    for (let indexComment = 0; indexComment < comments.length; indexComment++) {
        commentsHtml += getCommentTemplate(comments[indexComment]["name"], comments[indexComment]["comment"]);
    }

    return commentsHtml;
}
