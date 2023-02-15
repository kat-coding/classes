'use strict';

/**
 * @author Katherine Watkins
 * SDEV 328
 * JS 3
 * available books code challenge
 */
class Book{
    /**
     *Book class stores information about books in bookstore
     *
     * @param title title of book
     * @param author author of book
     * @param isbn isbn number for book
     * @param numCopies copies in stock of this book
     */
    constructor(title, author, isbn, numCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    }
    get availability(){
        return this.getAvailability();
    }
    getAvailability(){
        if(this.getNumCopies() == 0){
            return "out of stock";
        }
        if(this.getNumCopies() < 10){
            return "low stock";
        }
        else{
            return "in stock";
        }
    }

    sell(numSold = 1){
        this.numCopies -= numSold;
    }

    restock(numCopies = 5){
        this.numCopies += numCopies;
    }
    getTitle(){
        return this.title;
    }
    getAuthor(){
        return this.author;
    }
    getISBN(){
        return this.isbn;
    }
    getNumCopies(){
        return this.numCopies;
    }
}
//JS 6 Technical Books
class TechnicalBook extends Book{

    constructor(title, author, isbn, numCopies, edition) {
        super(title, author, isbn, numCopies);
        this._edition = edition;
    }

    getEdition() {
        return `The current version of this book is, ${this._edition}.`;
    }
}
//Test the book class below
// const myBook = new Book("It", "Stephen King", 123456789, 5);
// console.log(myBook.getAvailability());
// myBook.restock(15);
// console.log(myBook.getAvailability());
// myBook.sell(20);
// console.log(myBook.getAvailability());

//Test TechnicalBook
const myTechBook = new TechnicalBook("Building Java Programs", "Stuart Reges and Marty Stepp", 9780135741944, 5, 5);
console.log(myTechBook.getAvailability());
myTechBook.restock(15);
console.log(myTechBook.getAvailability());
myTechBook.sell(20);
console.log(myTechBook.getAvailability());
console.log(myTechBook.getEdition());
