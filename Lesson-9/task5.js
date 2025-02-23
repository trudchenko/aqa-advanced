// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    {name: 'Tetiana', email: 'tetiana@gmail.com', age: 18},
    {name: 'Dmytro', email: 'dmytro@gmail.com', age: 21},
    {name: 'Mikhailo', email: 'mikhailo@gmail.com', age: 3},
];
for (const user of users ) {
    console.log(user);
}
for (const {name,email,age} of users ) {
    console.log(name,email,age);
}