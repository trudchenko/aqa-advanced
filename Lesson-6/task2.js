// Створіть функцію яка приймає один параметр: age.
// Усередині функції перевірте, чи age більше або рівне 18.
// Якщо age відповідає умові, поверніть true, інакше поверніть false.
// Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.

const ageCheck = (age) => age >= 18;

function validateAge(age) {

    let validAge = parseInt(age);

    if (isNaN(validAge) || validAge <= 0 || validAge > 130) {
        throw new Error('Некоректний вік');
    }

    return validAge;
}

const pringIsAdult = (age) => ageCheck(age) ? console.log ("Особа повтолітня") : console.log("Особа неповтолітня");

let age = validateAge('25');
pringIsAdult(age);


age = validateAge(15.73);
pringIsAdult(age);


