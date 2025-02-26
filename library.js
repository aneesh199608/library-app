const myLibrary = [];
const libraryContainer = document.querySelector(".library-container");
const addButton = document.querySelector(".add-book");
const bookForm = document.querySelector('.book-form');
const form = document.querySelector('.book-form form');

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.displayName = function(index) {
    
    
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-container');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    bookDiv.appendChild(titleContainer);

    const bookTitle = document.createElement('h2');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = this.title;
    bookTitle.title = this.title;
    titleContainer.appendChild(bookTitle);

    const authorContainer = document.createElement('div');
    authorContainer.classList.add('author-container');
    bookDiv.appendChild(authorContainer);

    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = `Author: ${this.author}`;
    bookAuthor.title=this.author;
    authorContainer.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.classList.add('book-pages');
    bookPages.textContent = `${this.pages} pages`;
    bookPages.title=this.pages;
    bookDiv.appendChild(bookPages);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    bookDiv.appendChild(buttonContainer);
    
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
    buttonContainer.appendChild(bookStatus);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
<path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
</svg>`;
    buttonContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
        const bookIndex = myLibrary.findIndex(b => b.title === this.title && b.author === this.author);
        if (bookIndex > -1) {
            myLibrary.splice(bookIndex, 1);
            displayLibrary();
        }
    })

    libraryContainer.appendChild(bookDiv);
}

function displayLibrary() {
    libraryContainer.innerHTML = '';
    myLibrary.forEach ((book, index) => {
        book.displayName(index);
    });
}

const book1 = new Book('Alchemist', 'Paulo Coelho', 256, 'Read' );
myLibrary.push(book1);

const book2 = new Book('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 318, 'Not Started' );
myLibrary.push(book2);
// const book3 = new Book('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 120, 'Not Started' );
// myLibrary.push(book3);

addButton.addEventListener('click', () => {
    bookForm.showModal();
})

form.addEventListener('submit', (e) => {
    const formData = new FormData(e.target);
    const newBook = new Book(
        formData.get('title'),
        formData.get('author'),
        formData.get('pages'),
        formData.get('status')
    );
    myLibrary.push(newBook);
    displayLibrary();
    form.reset();
});

document.querySelector('.cancel').addEventListener('click', () => {
    bookForm.close();
    form.reset();
});

displayLibrary();


