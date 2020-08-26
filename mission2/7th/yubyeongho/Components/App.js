import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';

import { fetch, save } from '../data.js';

function App($target) {
  this.init = () => {
    this.$target = $target;
    this.todos = fetch('todos');
    console.log(this.todos);

    const $todoInputElement = this.$target.querySelector('#todo-input');
    const $todoListElement = this.$target.querySelector('#todo-list');
    const $todoCountElement = this.$target.querySelector('#todo-count');

    this.todoList = new TodoList(
      $todoListElement,
      this.todos,
      this.onUpdateTodoCount
    );
    this.todoInput = new TodoInput(
      $todoInputElement,
      this.onAddTodo,
      this.removeAll
    );
    this.todoCount = new TodoCount($todoCountElement, this.todos);
  };

  this.onAddTodo = (inputText) => {
    const newTodos = [
      ...this.todos,
      {
        text: inputText,
        isCompleted: false,
      },
    ];
    this.todos = newTodos;

    save('todos', this.todos);
    this.todoList.setState(newTodos);
    this.onUpdateTodoCount(newTodos);
  };

  this.onUpdateTodoCount = (newTodos) => {
    this.todoCount.setState(newTodos);
    save('todos', newTodos);
  };

  this.removeAll = () => {
    this.todoList.setState([]);
    this.todos = [];
    save('todos', this.todos);
    this.onUpdateTodoCount(this.todos);
  };

  this.init();
}

export default App;
