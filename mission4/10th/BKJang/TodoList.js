import { checkUseNewKeyword, checkDataValidation } from './validationUtil.js';

function TodoList(targetElement, initialData, toggleTodo, deleteTodo) {
  if (checkUseNewKeyword(new.target)) {
    this.target = targetElement;
    this.data = initialData;
  }

  this.render = function () {
    const todosHTML = this.data.map(todo => {
      const todoText = todo.isCompleted ? `${todo.content} (완료)` : todo.content;
      return `<li data-item-id=${todo._id} class="todo-item" draggable="true">
      ${todoText}
      <button data-item-id=${todo._id} class="delete-btn">삭제</button>
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
    const todoId = e.target.getAttribute('data-item-id');
    const nodeName = e.target.nodeName;
    if (nodeName === 'LI') {
      toggleTodo(todoId);
    }

    if (nodeName === 'BUTTON') {
      deleteTodo(todoId);
    }
  });

  this.target.addEventListener('dragstart', function(e) {
    const todoId = e.target.getAttribute('data-item-id');
    e.dataTransfer.setData('todoForDnD', todoId)
    e.dataTransfer.dropEffect = 'move'
  })

  this.target.addEventListener('dragover', function(e) {
    e.preventDefault()
  })

  this.target.addEventListener('drop', function(e) {
    e.stopPropagation()
    const todoId = e.dataTransfer.getData('todoForDnD')
    toggleTodo(todoId);
  })

  checkDataValidation(this.data);
  this.render();
};

export default TodoList;