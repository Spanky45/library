const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return `${title} by ${author}, ${pages} pages long, ${read}.`;
    };
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "Not read");
addBookToLibrary("Harry Potter", "J.K. Rowling", 309, "Read");
addBookToLibrary("Curious George", "H.A. Ray", 38, "Read");

function displayBooks() {
    const bookContainer = document.querySelector('#book-container');

    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.classList.add("card");

        const cardTitleFrame = document.createElement('p');
        cardTitleFrame.classList.add("card-title-frame");
        cardTitleFrame.textContent = "Title:";

        const cardTitle = document.createElement('p');
        cardTitle.classList.add("card-title");
        cardTitle.textContent = myLibrary[i].title

        const cardAuthorFrame = document.createElement('p');
        cardAuthorFrame.classList.add("card-author-frame");
        cardAuthorFrame.textContent = "Author:";

        const cardAuthor = document.createElement('p');
        cardAuthor.classList.add("card-author");
        cardAuthor.textContent = myLibrary[i].author;

        const cardPagesFrame = document.createElement('p');
        cardPagesFrame.classList.add("card-pages-frame");
        cardPagesFrame.textContent = "Pages:";

        const cardPages = document.createElement('p');
        cardPages.classList.add("card-pages");
        cardPages.textContent = myLibrary[i].pages;

        const cardReadFrame = document.createElement('p');
        cardReadFrame.classList.add("card-read-frame");
        cardReadFrame.textContent = "Read:";

        const cardRead = document.createElement('p');
        cardRead.classList.add("card-read");
        cardRead.textContent = myLibrary[i].read;

        card.appendChild(cardTitleFrame);
        card.appendChild(cardTitle);
        card.appendChild(cardAuthorFrame);
        card.appendChild(cardAuthor);
        card.appendChild(cardPagesFrame);
        card.appendChild(cardPages);
        card.appendChild(cardReadFrame);
        card.appendChild(cardRead);
        bookContainer.appendChild(card);

    }
    
}

console.log(displayBooks());