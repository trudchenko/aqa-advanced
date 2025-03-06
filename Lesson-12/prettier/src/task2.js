// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2.
//  Присвойте значення отримані від цих виразів до змінних

function fetchUrl(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      return {error: error.message};
    });
}

function fetchToDo() {
  return fetchUrl('https://jsonplaceholder.typicode.com/todos/1');
}

function fetchUser() {
  return fetchUrl('https://jsonplaceholder.typicode.com/users/1');
}

     const promiseArray = [fetchToDo(), fetchUser()];

let promiseAll;
Promise.all(promiseArray)
  .then((a) => {
    promiseAll = a;
    console.log(promiseAll);
  })
  .catch((a) => {
    promiseAll = a;
    console.log(promiseAll);
  });

let promiseRace;
Promise.race(promiseArray)
  .then((a) => {
    promiseRace = a;
    console.log(promiseRace);
  })
  .catch((a) => {
    promiseRace = a;
    console.log(promiseRace);
  });