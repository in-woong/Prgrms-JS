import {
  checkTarget,
  checkDivNode,
  checkTypeFunction,
} from '../utils/validator.js';

function TodoList($target, todos, onToggleComplete, onRemoveTodo) {
  this.init = () => {
    checkTarget($target);
    checkDivNode($target);
    this.$target = $target;

    this.todos = todos;

    checkTypeFunction(onToggleComplete);
    checkTypeFunction(onRemoveTodo);

    this.render();
    this.bindEvents();
  };

  this.bindEvents = () => {
    this.$target.addEventListener('click', (e) => this.onclick(e));
  };

  this.onclick = (e) => {
    const clickedElement = e.target.nodeName;

    if (clickedElement === 'LI') {
      const todoId = e.target.getAttribute('todo-id');
      onToggleComplete(todoId);
    }
    if (clickedElement === 'BUTTON') {
      const todoId = e.target.parentNode.getAttribute('todo-id');
      onRemoveTodo(todoId);
    }
  };

  this.createTodoHTML = ({ id, text, isCompleted }) => {
    return isCompleted
      ? `<li todo-id="${id}" class="todo-completed">
          ${text}<button class="button-remove">X</button>
        </li>`
      : `<li todo-id="${id}">
          ${text}<button class="button-remove">X</button>
        </li>`;
  };

  this.createTodosHTML = (todos) => {
    return (
      todos.reduce((html, todo) => {
        html += this.createTodoHTML(todo);
        return html;
      }, `<ul class="todo-list">`) + `</ul>`
    );
  };

  this.render = () => {
    this.$target.innerHTML = this.createTodosHTML(this.todos);
  };

  this.setState = (nextTodos) => {
    this.todos = nextTodos;
    this.render();
  };

  this.init();
}

export default TodoList;
