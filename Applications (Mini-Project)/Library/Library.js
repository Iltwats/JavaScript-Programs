class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(newisCheckedOut) {
        this._isCheckedOut = newisCheckedOut;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(ratings) {
        this._ratings.push(ratings);
    }
    getAverageRating() {
        let ratingsAverage = Math.round(this._ratings.reduce(function (a, b) {
            return a + b;
        }) / this._ratings.length);
        this._ratings = ratingsAverage;
    }
}
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}
class Catalog {
    constructor(mediaList) {
        this._MyCatalog = [mediaList];
    }
    get mediaList() {
        return this._mediaList;
    }
    set mediaList(newMedialist) {
        this._MyCatalog.push(newMedialist);
    }
}
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
const hobbit = new Book('J.R.Tolkien', 'Hobbit', 744);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
const speed = new Media('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();
const Test = new Catalog(historyOfEverything);
Test.mediaList = speed;
Test.mediaList = hobbit;
console.log(Test)