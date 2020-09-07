export default function storage() {
  this.storage = window.localStorage;

  this.getAllTodoData = () => {
    return JSON.parse(this.storage);
  }
}