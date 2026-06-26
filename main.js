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

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read");
addBookToLibrary("Harry Potter", "J.K. Rowling", 309, "read");
addBookToLibrary("Curious George", "H.A. Ray", 38, "read");

function displayBooks() {
    const bookContainer = document.querySelector('#book-container');

    // for (let book of myLibrary)
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.classList.add("card");

        const cardTitle = document.createElement('p');
        cardTitle.classList.add("card-title");
        cardTitle.textContent = myLibrary[i].title

        const cardAuthor = document.createElement('p');
        cardAuthor.classList.add("card-author");
        cardAuthor.textContent = myLibrary[i].author;

        const cardPages = document.createElement('p');
        cardPages.classList.add("card-author");
        cardPages.textContent = myLibrary[i].pages;

        const cardRead = document.createElement('p');
        cardRead.classList.add("card-author");
        cardRead.textContent = myLibrary[i].read;

        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(cardPages);
        card.appendChild(cardRead);
        bookContainer.appendChild(card);

    }
    
}

console.log(displayBooks());