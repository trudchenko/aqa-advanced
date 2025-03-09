// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

async function fetchUrl(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return {error: error.message};
  }
}

function fetchToDo() {
  return fetchUrl('https://jsonplaceholder.typicode.com/todos/1');
}

function fetchUser() {
  return fetchUrl('https://jsonplaceholder.typicode.com/users/1');
}

const promiseArray = [fetchToDo(), fetchUser()];

let promiseAll = await Promise.all(promiseArray);
console.log(promiseAll);

let promiseRace = await Promise.race(promiseArray);
console.log(promiseRace);
