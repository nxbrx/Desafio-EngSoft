

class Book {
    constructor(id, title, description, author) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
    }
}


class Library {
    constructor() {
        this.books = [];
    }

    addBook(bookInfo) {
        const id = this.generateId();
        const newBook = new Book(id, bookInfo.title, bookInfo.description, bookInfo.author);
        this.books.push(newBook);
        return newBook;
    }
    getBooks() {
        return this.books;
    }
    removeBookById(id) {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
        } else {
            throw new Error('Book not found');
        }
    }
    getBookById(id) {
        const book = this.books.find(book => book.id === id);
        if (book) {
            return book;
        } else {
            throw new Error('Book not found');
        }
    }
    updateBookById(id, info) {
        const book = this.getBookById(id);
        if (info.title) book.title = info.title;
        if (info.description) book.description = info.description;
        if (info.author) book.author = info.author;
        return book;
    }
    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}
const library = new Library();

const book1 = library.addBook({ title: 'The Catcher in the Rye', description: 'A novel by J.D. Salinger', author: 'J.D. Salinger' });
console.log('Added Book:', book1);

const books = library.getBooks();
console.log('All Books:', books);

const bookById = library.getBookById(book1.id);
console.log('Book by ID:', bookById);

library.updateBookById(book1.id, { title: 'Updated Title' });
console.log('Updated Book:', library.getBookById(book1.id));

library.removeBookById(book1.id);
console.log('All Books after removal:', library.getBooks());
