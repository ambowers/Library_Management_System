//Task 1 Create a book class

class Book {
    constructor (title, author, ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true; // default is true, this will be for books availibility
    }
    getDetails(){
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }// returns a string w books title, author, and ISBN

// getter for isAvailable
    get isAvailable(){
        return this._isAvailable;
    }
// setter for isAvailable
    set isAvailable(status){
        this._isAvailable = status;
    }
}

// Task 2 Create a section class

class Section {
    constructor(name){
        this.name = name;
        this.books = []; // array to store books in the section
    }

    addbook(book){
        this.books.push(book); // adds a book object to the books aray
    }

    getAvailableBooks(){
        return this.books.filter(book => book.isAvailable).length; // returns num of available books in section
    }

    listbooks(){
        this.books.forEach(book => {
            const status = book.isAvailable ? "Available" : "Borrowed";
            console.log (`${book.title} - ${status}`); //lists all bookks in the section, showing their title and availibility
        });
    }
}
