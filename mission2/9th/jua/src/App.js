import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js';

export default function App() {
  const data = [];

  const $todoList = document.querySelector('#todo-list');
  const $todoForm = document.querySelector('.todo-form');
  const $todoInput = document.querySelector('.todo-input');
  const $todoCount = document.querySelector('.todo-count');

  const todoList = new TodoList(data, $todoList, this);
  const todoInput = new TodoInput($todoInput, $todoForm, this);
  const todoCount = new TodoCount($todoCount, data);

  this.countTodo = (data) => {
    const totalCount = data.length;
    const completedCount = data.filter(({ isCompleted }) => isCompleted === true).length;
    todoCount.setState(totalCount, completedCount);
  };

  this.addTodo = (text) => {
    data.push({ text, isCompleted: false });
    todoList.setState(data);
    this.countTodo(data);
  };

  this.deleteTodo = (index) => {
    data.splice(index, 1);
    todoList.setState(data);
    this.countTodo(data);
  };

  this.completeTodo = (index) => {
    data[index].isCompleted = !data[index].isCompleted;
    todoList.setState(data);
    this.countTodo(data);
  };

  this.countTodo(data);
}
