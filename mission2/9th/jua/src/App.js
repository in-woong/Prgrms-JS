import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js';
import TodoRemoveBtn from './components/TodoRemoveBtn.js';

export default function App() {
  let data = [];

  const $todoList = document.querySelector('#todo-list');
  const $todoForm = document.querySelector('.todo-form');
  const $todoInput = document.querySelector('.todo-input');
  const $todoCount = document.querySelector('.todo-count');
  const $removeAllBtn = document.querySelector('.remove-all-btn');

  const todoList = new TodoList(data, $todoList, this);
  const todoCount = new TodoCount($todoCount, data);
  const todoInput = new TodoInput($todoInput, $todoForm, this);
  const removeAllBtn = new TodoRemoveBtn($removeAllBtn);

  this.countTodo = (data) => {
    const totalCount = data.length;
    const completedCount = data.filter(({ isCompleted }) => isCompleted === true).length;
    todoCount.setState(totalCount, completedCount);
  };

  this.setState = (data) => {
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

  this.countTodo(data);
}
