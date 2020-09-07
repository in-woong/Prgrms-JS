import { storage } from '../storage.js';

export default function TodoList (elementId, todos) {
  this.state = todos;
  this.elementId = elementId;

  this.createView = function () {
    return `${this.state.map((todoItem) => {
      return todoItem.isComplete ? `<li><s>${todoItem.text}</s></li>` : `<li>${todoItem.text}</li>` 
    }).join('')}`;
  }

  this.render = () => {
    this.element.innerHTML = this.createView();
  }

  this.init = () => {
    const parenElement = document.querySelector('#app');

    this.state = storage.getAllTodoData();

    parenElement.insertAdjacentHTML('afterbegin', `<ul id="todo-list">${this.createView()}</ul>`);
    this.element = document.querySelector(`#${this.elementId}`);

    this.addEvent()
  }

  this.addEvent = () => {
    const addTodoReciveEventHandler = (e) => {
      this.setState(e.detail.newTodo);
      storage.setTodoData(this.state);
      this.render(this.createView());
      
      const departmentElement = document.querySelector('#todo-count');
      departmentElement.dispatchEvent(new CustomEvent('receiveTodoList', {detail: {todoList: [...this.state]}}))
    }

    const removeAllReceiveEventHandler = () => {
      this.initState();
      storage.setTodoData([])
      this.render();
    }

    this.element.addEventListener('addTodo', addTodoReciveEventHandler);
    this.element.addEventListener('removeAll', removeAllReceiveEventHandler);
  }

  this.setState = function (newState) {
    this.state = [...this.state, { text: newState, isComplete: false }];
  }

  this.initState = () => {
    this.state = [];
  }

  this.init();
}
