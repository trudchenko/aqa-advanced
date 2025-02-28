
import {Book} from "./Book.js";
import {EBook} from "./EBook.js";

const book1 = new Book('Harry Potter', 'J. K. Rowling', 2012);
const book2 = new Book('Sherlock Holmes','A.Doyle', 1909);

console.log("\n***Book objects:");
book1.printInfo();
book2.printInfo();

const ebook = new EBook('Harry Potter', 'J. K. Rowling', 2002, 'pdf');
console.log("\n***EBook object:");
ebook.printInfo();

book1.title = 'Harry Potter and phenix';
book1.author = "J.K.";
book1.year = 1987;
ebook.format = 'doc';
console.log("\n***Modified objects:");
book1.printInfo();
ebook.printInfo();

const array = [book1, book2, ebook];
let oldestBook =  Book.findOldestBook(array);
console.log("\n***Oldest book:");
oldestBook.printInfo();

const ebook2 = EBook.createEbook(book1, 'txt');
console.log("\n***EBook from Book:");
ebook2.printInfo();
