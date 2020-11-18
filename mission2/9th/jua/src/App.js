import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoCount from './components/TodoCount.js';
import TodoRemoveBtn from './components/TodoRemoveBtn.js';

export default function App() {
  this.data = [];

  try {
    this.data = JSON.parse(localStorage.getItem('todo-list')) || [];
  } catch (error) {
    alert(error);
  }

  const $todoList = document.querySelector('#todo-list');
  const $todoForm = document.querySelector('.todo-form');
  const $todoInput = document.querySelector('.todo-input');
  const $todoCount = document.querySelector('.todo-count');
  const $removeAllBtn = document.querySelector('.remove-all-btn');

  this.countTodo = (data) => {
    const totalCount = data.length;
    const completedCount = data.filter(({ isCompleted }) => isCompleted).length;
    this.todoCount.setState(totalCount, completedCount);
  };

  this.setState = (newData) => {
    localStorage.setItem('todo-list', JSON.stringify(newData));
    this.data = newData;
    this.countTodo(newData);
    this.todoList.setState(newData);
  };

  this.addTodo = (text) => {
    const newData = [...this.data, { text, isCompleted: false }];
    this.setState(newData);
  };

  this.deleteTodo = (index) => {
    const newData = [...this.data.slice(0, index), ...this.data.slice(index + 1)];
    this.setState(newData);
  };

  this.completeTodo = (index) => {
    const newData = [
      ...this.data.slice(0, index),
      {
        text: this.data[index].text,
        isCompleted: !this.data[index].isCompleted,
      },
      ...this.data.slice(index + 1)];
    this.setState(newData);
  };

  $removeAllBtn.addEventListener('removeAll', () => {
    this.setState([]);
  });

  this.init = () => {
    this.todoList = new TodoList({
      data: this.data,
      $todoList,
      deleteTodo: this.deleteTodo,
      completeTodo: this.completeTodo,
    });
    this.todoCount = new TodoCount($todoCount, this.data);
    new TodoInput($todoInput, $todoForm, this.addTodo);
    new TodoRemoveBtn($removeAllBtn);
  };

  this.init();
  this.setState(this.data);
}
