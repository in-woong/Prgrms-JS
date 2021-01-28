import { getTargetElement, checkUseNewKeyword, checkDataValidation } from './validationUtil.js';

function TodoList(targetElementId, initialData, toggleTodo, deleteTodo) {
  if (checkUseNewKeyword(new.target)) {
    this.target = getTargetElement(targetElementId);
    this.data = initialData;
  }

  this.render = function () {
    const todosHTML = this.data.map((todo, index) => {
      const todoText = todo.isCompleted ? `${todo.text} (완료)` : todo.text;
      return `<li data-item-index=${index} class="todo-item">
      ${todoText}
      <button data-item-index=${index} class="delete-btn">삭제</button>
      </li>`
    }).join('');

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

  this.target.addEventListener('click', function(e) {
    const itemIndex = e.target.getAttribute('data-item-index');
    const parsedItemIndex = typeof itemIndex !== undefined && parseInt(itemIndex);
    const nodeName = e.target.nodeName;

    if (nodeName === 'LI') {
      toggleTodo(parsedItemIndex);
    }

    if (nodeName === 'BUTTON') {
      deleteTodo(parsedItemIndex);
    }
  });

  checkDataValidation(this.data);
  this.render();
};

export default TodoList;
