import TodoList from './TodoList.js';

const todos = []

try {
  const todoList = new TodoList(document.querySelector('#todo-list'), todos)

  const $input = document.querySelector('#todo-input');
  todoList.addTodo($input);

} catch (e) {
  console.log(e.message);
}