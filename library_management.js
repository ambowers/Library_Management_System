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
// Task 5 handle books borrowing and returning
    calculateTotalBooksAvailable(){
        const availableBooks = this.books.filter(book => book.isAvailable);
        return availableBooks.length
    }

}


// Task 3 Create a patron class

class Patron {
    constructor(name){
        this.name = name;
        this.borrowedBooks =[]; // array to store borrowed books
    }

    borrowBook(book){
        if (book.isAvailable){
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed ${book.title}`);
        } //allows the patron to borrow a book if its available
        else{
            console.log(`${book.title} is currently unavailable`);
        }
    }

    returnBook(){
        const bookIndex = this.borrowedBooks.indexOf(book); // indexOf searches through array and returns index where requested value of found - txtbook pg 68
        if (bookIndex !== -1){ // use -1 bc 0 is a value of array (1)
            this.borrowedBooks = this.borrowedBooks
            .slice(0,bookIndex)
            .concat(this.borrowedBooks.slice(bookIndex+1));
            // usinf concat and slice "takes an array and an index and returns a new array that is a copy of the original w the element at the given index removed" txtbook pg 69
        
        book.isAvailable = true;
        console.log(`${this.name} returned ${book.title}`);
        }
    }
}

// Task 4 Create a VIPPatron class that inherits from Patron

class VIPPatron extends Patron {
    constructor(name){
        super(name);
        this.priority = true; // boolean so vippatrons have borrowing priority over regular patrons
    }

    borrowBook(book){
        // override borrowBook method to prioritize in case of competition w regular patrons
        if (book.isAvailable){
            book.isAvailable = false
            this.borrowedBooks.push(book);
            console.log(`VIPPatron ${this.name} borrowed ${book.title}`)
        } else{
            console.log(`${book.title} is currently unavailable`)
        }
    }
}


