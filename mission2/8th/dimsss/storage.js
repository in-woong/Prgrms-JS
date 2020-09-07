export const storage = {
  getAllTodoData: () => {
    if (window.localStorage.hasOwnProperty('todos')) return JSON.parse(window.localStorage['todos']);
    return [];
  },
  setTodoData: (newTodo) => {
    if (window.localStorage.hasOwnProperty('todos')) window.localStorage.setItem('todos', JSON.stringify(newTodo));
  }
}