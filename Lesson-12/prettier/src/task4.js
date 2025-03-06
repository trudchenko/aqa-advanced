// Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.

class FetchHandler {
  constructor(url) {
    this.url = url;
  }

  async _fetch() {
    try {
      const res = await fetch(this.url);
      return res.json();
    } catch (error) {
      return {error: error.message};
    }
  }
}

class UserHandler extends FetchHandler {
  fetchUser() {
    return this._fetch();
  }
}

class TodoHandler extends FetchHandler {
  fetchTodo() {
    return this._fetch();
  }
}

const userHandler = new UserHandler(
  'https://jsonplaceholder.typicode.com/users/1'
);
const todoHandler = new TodoHandler(
  'https://jsonplaceholder.typicode.com/todos/1'
);

const caller = async () => {
  let promiseAll = await Promise.all([
    userHandler.fetchUser(),
    todoHandler.fetchTodo(),
  ]);
  console.log(promiseAll);
};

caller();
