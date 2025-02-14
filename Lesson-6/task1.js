// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

//Function declaration
function areaRectangleDec(width,height) {
    return width * height;
}

//function expression
const areRecEx = function(width,height){
    return width * height
}

// arrow function
const areaRecArrow = (width,height) => width * height;

function validateNumber(number) {

    let validNumber = parseFloat(number);

    if (isNaN(validNumber)) {
        throw new Error('Значеня не є числом');
    }
    if (validNumber <= 0) {
        throw new Error('Число не є додатнім');
    }

    return validNumber;
}

let width = '5.5abc';
let height = 9;
width = validateNumber(width);
height = validateNumber(height);

const rec = areaRectangleDec(width,height);
console.log(`Площа прямокутника дорівнює ${rec}`);

console.log(`Площа прямокутника дорівнює ${areRecEx(width,height)}`);

console.log(`Площа прямокутника дорівнює ${areaRecArrow(width,height)}`);
