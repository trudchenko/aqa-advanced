// Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”
// Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
// У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”


import chalk from 'chalk';

function checkOrder(ordered,available) {

    if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    }

    if (ordered === 0){
        // throw new Error ("Your order is empty")
        return chalk.redBright("Your order is empty");
    }
    
    return "Your order is accepted";
}


// try {
//     const order = checkOrder(10,5);;
//     console.log(order);  
//   } catch(error) {
//     console.error(chalk.redBright(error.message));
//   }

console.log(checkOrder(10,5));
console.log(checkOrder(0,5));
console.log(checkOrder(3,5));
