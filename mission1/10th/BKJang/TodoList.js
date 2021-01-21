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

    todoListElement.innerHTML =
      `<ul>
        ${this.data?.map(todo => {
          return `<li>${todo.text}</li>`;
        }).join('')}
      </ul>`;
  }

  this.checkValidation(this.data);
  this.render(this.targetElement);
};

export default TodoList;
