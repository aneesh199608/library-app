const myLibrary = [];
const libraryContainer = document.querySelector(".library-container");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.displayName = function() {
    
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-container')

    const bookTitle = document.createElement('h2');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = this.title;
    bookDiv.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = this.author;
    bookDiv.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.classList.add('book-pages');
    bookPages.textContent = this.pages;
    bookDiv.appendChild(bookPages);

    const bookRead = document.createElement('p');
    bookRead.classList.add('book-read');
    bookRead.textContent = this.read;
    bookDiv.appendChild(bookRead);

    libraryContainer.appendChild(bookDiv);
}

function displayLibrary() {
    libraryContainer.innerHTML = '';
    myLibrary.forEach (book => {
        book.displayName();
    });
}

const book1 = new Book('Alchemist', 'Paulo Coelho', 256, 'Read' );
myLibrary.push(book1);

const book2 = new Book('Sapiens', 'Yuval Noah Harari', 318, 'Not Read' );
myLibrary.push(book2);

displayLibrary();


