import { storage } from '../storage.js';

export default function TodoCount(elementId) {
  this.elementId = elementId
  
  this.createView = (todoCount) => {
    return `<div id="${elementId}">해야될 todo 갯수 : ${todoCount.inCompleteCount} 완료된 todo 갯수 : ${todoCount.completeCount}</div>`;
  }

  this.addEvent = () => {
    this.element.addEventListener('receiveTodoList', (e) => {
      this.render(e.detail.todoList);
    })
  }

  this.setTodoCount = (todoList) => {
    return todoList.reduce((acc, todo) => {
      if (todo.isComplete) {
        acc.completeCount = acc.completeCount + 1
      } else {
        acc.inCompleteCount = acc.inCompleteCount + 1
      }
    
      return acc
    }, {
      completeCount: 0,
      inCompleteCount: 0
    })
  }

  this.render = (todoList) => {
    this.element.innerHTML = this.createView(this.setTodoCount(todoList));
  }

  this.init = () => {
    this.parentElement = document.querySelector('#app');
    this.todoListElement = document.querySelector('#todo-list');

    this.parentElement.insertAdjacentHTML('beforeend', this.createView(this.setTodoCount(storage.getAllTodoData())));
    this.element = document.querySelector(`#${this.elementId}`);
    this.addEvent();
  }

  this.init();  
}
