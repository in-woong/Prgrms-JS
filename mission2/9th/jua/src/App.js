import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js'

export default function App() {
  const data = [];

  const $todoList = document.querySelector('#todo-list');
  const $todoForm = document.querySelector('.todo-form');
  const $todoInput = document.querySelector('.todo-input');

  const todoList = new TodoList(data, $todoList, this);
  const todoInput = new TodoInput($todoInput, $todoForm, this);

  this.addTodo = (text) => {
    data.push({ text, isCompleted: false });
    todoList.setState(data);
  };

  this.deleteTodo = (index) => {
    data.splice(index, 1);
    todoList.setState(data);
  };

  this.completeTodo = (index) => {
    data[index].isCompleted = !data[index].isCompleted;
    todoList.setState(data);
  };
}
