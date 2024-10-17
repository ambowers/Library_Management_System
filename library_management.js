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
