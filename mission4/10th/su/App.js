import * as api from './api.js'
import TodoList from './TodoList.js'

export default function App() {
  const $todoList = document.querySelector('#todo-list')
  const $addTodoBtn = document.querySelector('#add-todo-button')
  const $todoInput = document.querySelector('#todo-input')

  this.init = async () => {
    const $username = await api.loadUsers()[1];
    console.log($username)
    const data = await api.loadTodoList($username);

    const todoList = new TodoList({
      $target: $todoList,
      data: data,
      onClick: async function (id) {
        await api.toggleTodo($username, id);
  
        const updatedData = await api.loadTodoList($username);
        todoList.setState(updatedData);
      },
      onRemove: async function (id) {
        await api.deleteTodo($username, id)
        const updatedData = await api.loadTodoList($username);
        todoList.setState(updatedData);
      },
    });

    $addTodoBtn.addEventListener('click', async function () {
      let todoText = $todoInput.value;

      if (todoText.length > 0) {
        await api.addTodo($username, todoText);
  
        const updatedData = await api.loadTodoList($username);
        todoList.setState(updatedData);
        todoText = ''
      }
  });
  }

  this.init();

}
