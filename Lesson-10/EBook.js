// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book.
//  Додайте до класу EBook нову властивість, наприклад, "формат файлу". 
//  Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook 
//  (все те саме що і для Book але ще формат файлу). 
// Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

import {Book} from "./Book.js"; 

export class EBook extends Book {
    constructor(t,a,y,f) {
        super(t,a,y);
        this._format = f;
    }

    get format() {
        return this._format;
    }

    set format(value) {
        if (typeof(value) !== 'string')  {
            throw new Error("Invalid format");
        } 
        this._format = value;
    }

    printInfo() {
        console.log(`Book ${this._title} was writted by ${this._author} in ${this._year}. Format ${this._format}`);
    }

    static createEbook(book,format){
        return new EBook(book.title, book.author, book.year, format);
    }
}