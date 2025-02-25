const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.displayName = function () {
    bookTitle.textContent+= this.title + ' ';
    bookAuthor.textContent+=this.author+' ';
    bookPages.textContent+=this.pages+' ';
    bookStatus.textContent+=this.read+' ';
}

const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");
const bookPages = document.querySelector(".book-pages");
const bookStatus = document.querySelector(".book-status");

const book1 = new Book('Alchemist', 'Paulo Coelho', 256, 'Read' );
book1.displayName();
const book2 = new Book('Sapiens', 'Yuval Noah Harari', 318, 'Not Read' );
book2.displayName();

