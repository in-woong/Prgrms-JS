import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';

import { SELECTOR, DATA } from '../utils/constant.js';
import {
  checkTarget,
  checkMainNode,
  checkTypeArray,
  checkTodoProperties,
} from '../utils/validator.js';

import { fetchData, saveData } from '../Data.js';

function App($target) {
  this.init = () => {
    checkTarget($target);
    checkMainNode($target);
    this.$target = $target;

    const todos = fetchData(DATA.TODO);
    checkTypeArray(todos);
    checkTodoProperties(todos);
    this.todos = todos;

    const $todoElement = this.$target.querySelector(SELECTOR.TODO_LIST);
    const $inputFormElement = this.$target.querySelector(
      SELECTOR.TODO_INPUT_FORM
    );
    const $todoCountElement = this.$target.querySelector(SELECTOR.TODO_COUNT);

    this.todoList = new TodoList(
      $todoElement,
      this.todos,
      this.onToggleComplete,
      this.onRemoveTodo
    );
    this.todoInput = new TodoInput($inputFormElement, $target, this.onAddTodo);
    this.todoCount = new TodoCount($todoCountElement, this.todos);

    this.bindEvents();
  };

  this.bindEvents = () => {
    this.$target.addEventListener('@removeAll', () => this.onRemoveAll());
  };

  this.onRemoveAll = () => {
    const nextState = [];
    this.setState(nextState);
  };

  this.onToggleComplete = (id) => {
    const nextState = this.todos.map((todo) => {
      return todo.id === id
        ? {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        : todo;
    });

    this.setState(nextState);
  };

  this.onRemoveTodo = (id) => {
    const nextState = this.todos.filter((todo) => todo.id !== id);

    this.setState(nextState);
  };

  this.onAddTodo = (text) => {
    const newTodo = [
      {
        id: new Date().toString(),
        text,
        isCompleted: false,
      },
    ];

    const nextState = this.todos.concat(newTodo);

    this.setState(nextState);
  };

  this.setState = (nextState) => {
    checkTypeArray(nextState);
    checkTodoProperties(nextState);

    this.todos = nextState;

    this.todoList.setState(nextState);
    this.todoCount.setState(nextState);

    saveData(DATA.TODO, this.todos);
  };

  this.init();
}

export default App;
