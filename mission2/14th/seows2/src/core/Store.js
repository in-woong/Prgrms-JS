import { getLocalStorage, setLocalStorage } from '../util/localStorage.js';

const TODO_STORE_KEY = 'TODOS';

export default class Store {
  constructor(storage) {
    this.storage = storage;

    this.initStore();
  }

  initStore() {
    this.storage.todos = getLocalStorage(TODO_STORE_KEY);
  }

  getTodos() {
    return this.storage.todos;
  }

  addTodo(todo) {
    this.storage.todos = [...this.getTodos(), todo];
    setLocalStorage(TODO_STORE_KEY, this.storage.todos);
  }

  removeTodo(id) {
    this.storage.todos = this.storage.todos.filter(
      (todo) => todo.id !== Number(id)
    );
    setLocalStorage(TODO_STORE_KEY, this.storage.todos);
  }

  removeAllTodos() {
    this.storage.todos = [];
    setLocalStorage(TODO_STORE_KEY, this.storage.todos);
  }

  toggleTodoComplete(id) {
    this.storage.todos = this.storage.todos.map((todo) =>
      todo.id === Number(id)
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo
    );
    setLocalStorage('TODOS', this.storage.todos);
  }

  getTodoCounts() {
    const completedTodos = this.storage.todos.filter(
      (todo) => todo.isCompleted
    );
    return [this.storage.todos.length, completedTodos.length];
  }
}
