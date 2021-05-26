import { getTargetElement, checkUseNewKeyword, checkDataValidation } from './validationUtil.js';

function TodoList(targetElementId, initialData) {
  if (checkUseNewKeyword(new.target)) {
    this.target = getTargetElement(targetElementId);
    this.data = initialData;
  }

  this.render = function() {
    const todosHTML = this.data.map(todo => (
      todo.isCompleted ? `<li><s>${todo.text}</s></li>` : `<li>${todo.text}</li>`
    )).join('');

    this.target.innerHTML =
      `<ul>
        ${todosHTML}
      </ul>`;
  }

  this.setState = function(nextData) {
    checkDataValidation(nextData);
    this.data = nextData;
    this.render();
  }

  checkDataValidation(this.data);
  this.render();
};

export default TodoList;
