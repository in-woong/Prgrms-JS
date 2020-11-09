import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoCount from './components/TodoCount.js';
import TodoRemoveBtn from './components/TodoRemoveBtn.js';

export default function App() {
  let data = [];

  try {
    data = JSON.parse(localStorage.getItem('todo-list')) || [];
  } catch (error) {
    data = [];
  }

  const $todoList = document.querySelector('#todo-list');
  const $todoForm = document.querySelector('.todo-form');
  const $todoInput = document.querySelector('.todo-input');
  const $todoCount = document.querySelector('.todo-count');
  const $removeAllBtn = document.querySelector('.remove-all-btn');

  this.countTodo = (data) => {
    const totalCount = data.length;
    const completedCount = data.filter(({ isCompleted }) => isCompleted === true).length;
    todoCount.setState(totalCount, completedCount);
  };

  this.setState = (data) => {
    localStorage.setItem('todo-list', JSON.stringify(data));
    this.countTodo(data);
    todoList.setState(data);
  };

  this.addTodo = (text) => {
    data.push({ text, isCompleted: false });
    this.setState(data);
  };

  this.deleteTodo = (index) => {
    data.splice(index, 1);
    this.setState(data);
  };

  this.completeTodo = (index) => {
    data[index].isCompleted = !data[index].isCompleted;
    this.setState(data);
  };

  $removeAllBtn.addEventListener('removeAll', () => {
    data = [];
    this.setState(data);
  });

  const todoList = new TodoList({
    data,
    $todoList,
    deleteTodo: this.deleteTodo,
    completeTodo: this.completeTodo,
  });
  const todoCount = new TodoCount($todoCount, data);
  new TodoInput($todoInput, $todoForm, this.addTodo);
  new TodoRemoveBtn($removeAllBtn);

  this.setState(data);
}
