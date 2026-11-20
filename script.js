// Die Bücher kommen aus db.js (Array "books"), die Templates aus scripts/templates.js

function init() {                                               // wird beim Laden der Seite aufgerufen (<body onload="init()">)
    render();
}


// 1. Schleife: alle Bücher als Karten anzeigen (nur EINMAL beim Start)
function render() {
    let bookListRef = document.getElementById('book_list');    // 1. leere Box holen
    bookListRef.innerHTML = "";                                 // 2. leeren

    for (let indexBook = 0; indexBook < books.length; indexBook++) {   // 3. für jedes Buch
        let commentsHtml = getCommentsHtml(indexBook);                 //    Kommentare bauen (2. Schleife)
        let likesHtml = getLikesTemplate(indexBook, getHeartImg(indexBook));                    //    Likes mit Herz bauen
        let bookInfoHtml = getBookInfoTemplate(indexBook, likesHtml);                           //    Info-Teil bauen (Titel, Preis, Likes)
        bookListRef.innerHTML += getBookTemplate(indexBook, bookInfoHtml, commentsHtml);        // 4. Karte anhängen
    }
}


// volles oder leeres Herz – je nachdem, ob das Buch geliked ist
function getHeartImg(indexBook) {
    return books[indexBook]["liked"] ? "./img/heart-filled.png" : "./img/heart-empty.png";
}


// nur die Likes von EINEM Buch neu zeichnen – der Rest der Seite bleibt, wie er ist
function renderLikes(indexBook) {
    let likesRef = document.getElementById('likes_' + indexBook);
    likesRef.innerHTML = getLikesTemplate(indexBook, getHeartImg(indexBook));
}


// nur die Kommentare von EINEM Buch neu zeichnen und das Eingabefeld leeren
function renderComments(indexBook) {
    let commentsRef = document.getElementById('comments_' + indexBook);
    commentsRef.innerHTML = getCommentsHtml(indexBook);
    document.getElementById('comment_input_' + indexBook).value = "";
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


// Like an/aus: wird beim Klick aufs Herz aufgerufen (onclick="toggleLike(${indexBook})" im Template)
function toggleLike(indexBook) {
    if (books[indexBook]["liked"]) {                // schon geliked?
        books[indexBook]["likes"]--;                //    1 Like weniger
        books[indexBook]["liked"] = false;          //    Herz wird leer
    } else {                                        // noch nicht geliked
        books[indexBook]["likes"]++;                //    1 Like mehr
        books[indexBook]["liked"] = true;           //    Herz wird voll
    }
    renderLikes(indexBook);                         // nur Zahl und Herz von diesem Buch neu zeichnen
}


// Kommentar hinzufügen: wird beim Klick auf „Senden“ aufgerufen (onclick="addComment(${indexBook})" im Template)
function addComment(indexBook) {
    let inputRef = document.getElementById('comment_input_' + indexBook);   // Eingabefeld von DIESEM Buch holen
    let commentText = inputRef.value.trim();                                // Text lesen, Leerzeichen vorne/hinten weg

    if (commentText == "") {                        // leeres Feld?
        return;                                     //    dann nichts tun
    }

    books[indexBook]["comments"].unshift({ "name": "Peter", "comment": commentText });   // neuer Kommentar ganz oben
    renderComments(indexBook);                      // nur die Kommentare von diesem Buch neu zeichnen, Feld leeren
}
