// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент.
//  Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

function printText(text, milliseconds) {
    setTimeout(console.log, milliseconds, text);
}

printText('some text "some text for test escape"', 3000);

const a = 1;
const b = 2;
const c = 8;
if (a == 0) {
    console(a);
} else if (b == 0) {
    console(a);
} else if (c == 0) {
    console(c);
}

const myFavoriteColor = 'red';
console.log(myFavoriteColor);