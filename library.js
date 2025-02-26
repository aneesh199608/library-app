const myLibrary = [];
const libraryContainer = document.querySelector(".library-container");

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
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
    bookAuthor.textContent = `Author: ${this.author}`;
    bookDiv.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.classList.add('book-pages');
    bookPages.textContent = `${this.pages} pages`;
    bookDiv.appendChild(bookPages);

    const bookStatus = document.createElement('select');
    bookStatus.classList.add('book-status');
    bookStatus.classList.add(`status-${this.status.toLowerCase().replace(' ','-')}`);
    bookStatus.innerHTML = `
        <option value="Read">Read</option>
        <option value="Not Started">Not Started</option>
        <option value="Reading">Reading</option>
        <option value="Archived">Archived</option>
        `;
    bookStatus.value = this.status;
    bookStatus.addEventListener("change", () => {
        this.status = bookStatus.value;
        bookStatus.className = 'book-status';
        bookStatus.classList.add(`status-${this.status.toLowerCase().replace(' ','-')}`);
    });
    bookDiv.appendChild(bookStatus);

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

const book2 = new Book('Sapiens', 'Yuval Noah Harari', 318, 'Not Started' );
myLibrary.push(book2);

displayLibrary();


