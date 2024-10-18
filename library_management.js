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

    addBook(book){
        this.books.push(book); // adds a book object to the books aray
    }

    getAvailableBooks(){
        return this.books.filter(book => book.isAvailable).length; // returns num of available books in section
    }

    listBooks(){
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

    borrowBook(book, isVIP = false){
        if (book.isAvailable){
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed ${book.title}`);
        } //allows the patron to borrow a book if its available
        else if (!isVIP){
            console.log(`${book.title} is currently unavailable`);
        }
      }

    returnBook(book){
        const bookIndex = this.borrowedBooks.indexOf(book); // indexOf searches through array and returns index where requested value of found - txtbook pg 68
        if (bookIndex !== -1){ // use -1 bc 0 is a value of array (1)
        this.borrowedBooks.splice(bookIndex, 1);
        console.log(`${this.name} returned ${book.title}`)
        }else{
            console.log(`${this.name} does not have ${book.title}`)
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
       super.borrowBook(book, true);
       if (book.isAvailable === false){
        console.log(`VIP priority: ${this.name} borrowed ${book.title}`)
       }
    }
}

// ^^ task 5 done in task 2 to keep in the section class

// Task 6 Create and manage sections and patrons

//Create sections
const classic = new Section("Classics");
const autobio = new Section("Autobiographies")

//Create books
const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "123321123");
const book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", "567887654");
const book3 = new Book("The Diary of a Young Girl", "Anne Frank", "987789987");

//Add books to sections
classic.addBook(book1);
classic.addBook(book2);
autobio.addBook(book3);

//Create patrons
const regularPatron = new Patron("Dr.Reed");
const vipPatron = new VIPPatron("Lina Bee", true);

// Regular patron tries to borrow book
regularPatron.borrowBook(book2);

//VIP patron tries to borrow a book(has priority)
vipPatron.borrowBook(book2);

//return the book
regularPatron.returnBook(book2);

//List books and availibility
classic.listBooks();

//Calculate total books available in each section
console.log(`Total available books in Classics: ${classic.getAvailableBooks()}`);
console.log(`Total available books in Autobiographies: ${autobio.getAvailableBooks()}`);
