// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

export class Book {

    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof(value) !== 'string')  {
            throw new Error("Invalid title");
        } 
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof(value) !== 'string')  {
            throw new Error("Invalid author");
        } 
        this._author= value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof(value) !== 'number' || isNaN(value) || !isFinite(value))  {
            throw new Error("Invalid year");
        } 
        this._year = value;
    }
    
    printInfo() {
        console.log(`Book ${this._title} was writted by ${this._author} in ${this._year}`);
    }

    static findOldestBook (bookArray) {
        if (bookArray == null || bookArray.length == 0) {
            throw new Error ("Invalid array");
        } 
        
        // Method 1
        return bookArray.reduce((previousBook,currentBook) => previousBook.year > currentBook.year ? currentBook : previousBook);
        
        // Method 2
        // bookArray.sort((a,b) => a.year-b.year);
        // return bookArray[0];

        // Method 3
        // if (bookArray.length == 1) {
        //     return bookArray[0];
        // } 

        // let oldestBook = bookArray[0];
        // for (let i=1; i < bookArray.length; i ++){
        //     if (bookArray[i].year < oldestBook.year) {
        //         oldestBook = bookArray[i];
        //     }
        // }

        // return oldestBook;
    }
}