import TodoList from './TodoList.js';
import { KEY_CODE_ENTER } from './constants.js';

const todos = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

try {
  const todoList = new TodoList('#todo-list', todos, toggleTodo, deleteTodo);

  const todoInput = document.querySelector('#todo-input');

  function addTodo(e) {
    const newTodo = {
      text: e.target.value,
      isCompleted: false,
    }

    if (e.keyCode === KEY_CODE_ENTER) {
      todoList.setState([...todos, newTodo]);
      e.target.value = '';
    }
  }

  function toggleTodo(index) {
    const newTodos = todos.map((todo, todoIndex) => {
      if (index === todoIndex) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    todoList.setState(newTodos);
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((_todo, todoIndex) => (todoIndex !== index));
    todoList.setState(newTodos);
  }

  todoInput.addEventListener('keypress', addTodo);

} catch (error) {
  console.error('ERROR!!!!!', error);
}
