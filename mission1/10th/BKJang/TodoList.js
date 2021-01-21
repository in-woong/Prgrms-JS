import { checkUseNewKeyword, checkDataValidation } from './validationUtil.js';

function TodoList(targetElement, initialData) {
  checkUseNewKeyword(this);
  
  this.target = targetElement;
  this.data = initialData;

  TodoList.prototype.checkValidation = function (todos) {
    checkDataValidation(todos)
  }

  TodoList.prototype.render = function() {
    const todoListElement = document.querySelector(`#${this.target}`);
    const todosHTML = this.data?.map(todo => {
      if (todo.isCompleted) {
        return `<li><s>${todo.text}</s></li>`;
      }
      return `<li>${todo.text}</li>`;
    }).join('');

    todoListElement.innerHTML =
      `<ul>
        ${todosHTML}
      </ul>`;
  }

  TodoList.prototype.setState = function(nextData) {
    this.data = nextData;
    this.checkValidation(this.data);
    this.render();
  }

  this.checkValidation(this.data);
  this.render();
};

export default TodoList;
