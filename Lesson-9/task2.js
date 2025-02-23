// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const book = {
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    year: 1997
};

const {title: bookTitle, author} = book;
console.log(`Book title: ${bookTitle}, author: ${author}`);