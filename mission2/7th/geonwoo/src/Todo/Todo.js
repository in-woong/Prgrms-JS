import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';
import { createElement, renderErrorMessage } from '../utils/index.js';

export default class Todo {
  constructor(target) {
    try {
      this.targetName = target;
      const [todoListClass, todoInputClass, todoCountClass] = createElement(
        this.targetName
      );
      this.todoState = this.getTodoList(this.targetName);
      this.removeAllEvent = new CustomEvent('removeAll');

      this.todoInput = new TodoInput(
        document.querySelector(`.${todoInputClass}`),
        this.addTodo,
        this.addRemoveAllEvent(this.removeAllEvent),
        this.removeAllEvent
      );
      this.todoList = new TodoList(
        document.querySelector(`.${todoListClass}`),
        this.todoState,
        this.toggleTodoComplete,
        this.removeTodo
      );
      this.todoCount = new TodoCount(
        document.querySelector(`.${todoCountClass}`),
        this.todoState
      );
    } catch (e) {
      console.error(e);
      renderErrorMessage(e);
    }
  }

  getTodoList = (targetName) => {
    try {
      return JSON.parse(localStorage.getItem(targetName)) || [];
    } catch (e) {
      console.error(e);
    }
  };

  setState = (newTodoState) => {
    try {
      this.todoState = newTodoState;
      this.todoState.length &&
        localStorage.setItem(this.targetName, JSON.stringify(this.todoState));

      this.todoList.render(this.todoState);
      this.todoCount.render(this.todoState);
    } catch (e) {
      console.error(e);
    }
  };

  addTodo = (text) => {
    const newTodoState = [
      ...this.todoState,
      { id: Date.now(), text, isCompleted: false },
    ];
    this.setState(newTodoState);
  };

  toggleTodoComplete = (id) => {
    const newTodoState = this.todoState.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    this.setState(newTodoState);
  };

  removeTodo = (id) => {
    const newTodoState = this.todoState.filter((todo) => todo.id !== id);
    this.setState(newTodoState);
  };

  removeAll = () => {
    this.setState([]);
    localStorage.removeItem(this.targetName);
  };

  addRemoveAllEvent = (event) => (target) => {
    target.addEventListener(`${event.type}`, this.removeAll);
  };
}
