'use strict';

/**
 * @author Katherine Watkins
 * SDEV 328
 * JS 4
 * movie object code challenge
 *
 * Movie object takes in 5 arguments: Title, Director, Genre, Release Year, and Rating
 * Prototype has a function called "getOverview" that logs:
 * "<movie>, a <genre> film directed by <director> was released in <releaseYear>. It received
 * a rating of <rating>."
 *
 * Use class or function syntax to create prototype. Then create a few movies to test it.
 */

class Movie{
    constructor(title, genre, director, releaseYear, rating) {
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.releaseYear = releaseYear;
        this.rating = rating;

    }
    //getters
    getTitle(){
        return this.title;
    }
    getGenre(){
        return this.genre;
    }
    getDirector(){
        return this.director;
    }
    getReleaseYear(){
        return this.releaseYear;
    }
    getRating(){
        return this.rating;
    }

    //setters
    setTitle(title){
        this.title = title;
    }
    setGenre(genre){
        this.genre = genre;
    }
    setDirector(director){
        this.director = director;
    }
    setReleaseYear(releaseYear){
        this.releaseYear = releaseYear;
    }
    setRating(rating){
        this.rating = rating;
    }

    getOverview(){
        console.log(`${this.getTitle()}, a ${this.getGenre()} film directed by ${this.getDirector()} was released in ${this.getReleaseYear()}. It received
 * a rating of ${this.getRating()}.`);
    }
}