import { checkUseNewKeyword, checkDataValidation } from './validationUtil.js';

function TodoList(targetElement, initialData) {
  checkUseNewKeyword(this);
  
  this.targetElement = targetElement;
  this.data = initialData;

  TodoList.prototype.checkValidation = function (todos) {
    checkDataValidation(todos)
  }

  TodoList.prototype.render = function(target) {
    const todoListElement = document.querySelector(`#${target}`);
    const todosHTML = this.data?.map(todo => {
      if (!todo.isCompleted) {
        return `<li><s>${todo.text}</s></li>`;
      }
      return `<li>${todo.text}</li>`;
    }).join('');

    todoListElement.innerHTML =
      `<ul>
        ${todosHTML}
      </ul>`;
  }

  this.checkValidation(this.data);
  this.render(this.targetElement);
};

export default TodoList;
