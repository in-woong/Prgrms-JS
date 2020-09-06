export default function TodoStorage() {
  this.init = () => {
    this.todoStorage = window.localStorage;
    if (!this.getLocalStorageLength() || !this.todoStorage['todos']) {
      this.todoStorage.setItem('todos', JSON.stringify([]));
    }
  }

  this.getLocalStorageLength = () => {
    return window.localStorage.length;
  }

  this.todoSetItem = (todos) => {
    this.todoStorage.setItem('todos', JSON.stringify(todos));
  }

  this.todoGetItem = () => {
    return this.getLocalStorageLength() === 0 ? [] : JSON.parse(this.todoStorage.getItem('todos'));
  }
}
