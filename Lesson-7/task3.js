// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів
//        не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль,
//        навіть якщо помилка виникла або не виникла.

function divide(numerator,denominator) {
    
    if (!isNumber(numerator)) {
        throw new Error(`Значення ${numerator} не є числом`);
    }

    if (!isNumber(denominator)) {
        throw new Error(`Значення ${denominator} не є числом`);
    }

    if (denominator == 0) {
        throw new Error("Ділення на 0");
    }

    return numerator/denominator;
}

function isNumber(num) {
    return typeof(num) === "number" && !isNaN(num) && isFinite(num);
}

function callDivide(numerator,denominator) {
    try {
        console.log(divide(numerator,denominator));
    } catch(error) {
        console.error(error.message);
    } finally {
        console.log("Робота завершена");
    }
}

callDivide(12,6);
callDivide(1,6);
callDivide(12,0);
callDivide('adt',6);
callDivide(true,6);
callDivide(4,null);
callDivide(2,Infinity);
callDivide(NaN,6);
callDivide(8,[1,2]);