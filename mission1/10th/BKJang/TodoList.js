import { checkUseNewKeyword, checkDataValidation } from './validationUtil.js';

function TodoList(initialData) {
  checkUseNewKeyword(this);

  this.data = initialData;

  TodoList.prototype.checkValidation = function (todos) {
    checkDataValidation(todos)
  }

  TodoList.prototype.render = function() {
    const todoListElement = document.querySelector('#todo-list');

    todoListElement.innerHTML =
      `<ul>
        ${this.data?.map(todo => {
          return `<li>${todo.text}</li>`;
        }).join('')}
      </ul>`;
  }

  this.checkValidation(this.data);
  this.render();
};

export default TodoList;
