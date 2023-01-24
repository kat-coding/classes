'use strict';

class Book{
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
        if(this.numCopies() == 0){
            return "out of stock";
        }
        if(this.numCopies() < 10){
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

const myBook = new Book("It", "Stephen King", 123456789, 5);
console.log(myBook.getAvailability());
myBook.restock(15);
console.log(myBook.getAvailability());
myBook.sell(20);
console.log(myBook.getAvailability());
