import { checkUseNewKeyword, checkDataValidation } from './validationUtil.js';

function TodoList(targetElement, initialData) {
  if (checkUseNewKeyword(new.target)) {
    this.target = document.querySelector(`#${targetElement}`);
    this.data = initialData;
  }

  TodoList.prototype.checkValidation = function (todos) {
    checkDataValidation(todos)
  }

  TodoList.prototype.render = function() {
    const todosHTML = this.data.map(todo => (
      todo.isCompleted ? `<li><s>${todo.text}</s></li>` : `<li>${todo.text}</li>`
    )).join('');

    this.target.innerHTML =
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
