import {
  checkTarget,
  checkNode,
  checkTypeFunction,
  checkTodos,
} from '../utils/validator.js';
import { NODE } from '../utils/constant.js';

function TodoList({ $target, todos, onToggleTodo, onRemoveTodo }) {
  this.init = () => {
    checkTarget($target);
    checkNode(NODE.UL);
    checkTodos(todos);
    checkTypeFunction(onToggleTodo);
    checkTypeFunction(onRemoveTodo);

    this.$target = $target;
    this.todos = todos;

    this.bindEvents();
    this.render();
  };

  this.bindEvents = () => {
    this.$target.addEventListener('click', this.onClick);
    this.$target.addEventListener('dragstart', this.onDragStart);
    this.$target.addEventListener('dragover', this.onDragOver);
    this.$target.addEventListener('drop', this.onDrop);
  };

  this.onClick = (e) => {
    if (e.target.nodeName !== 'LI' && e.target.nodeName !== 'BUTTON') return;

    if (e.target.nodeName === 'LI') {
      onToggleTodo(e.target.id);
    }
    if (e.target.nodeName === 'BUTTON') {
      onRemoveTodo(e.target.parentNode.id);
    }
  };

  this.onDragStart = (e) => {
    e.dataTransfer.setData('text', e.target.id);
  };

  this.onDragOver = (e) => {
    e.preventDefault();
  };

  this.onDrop = (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'LI' && e.target.nodeName !== 'UL') {
      // drop이 '삭제버튼'에서 발생했을 때
      return;
    }

    const sourceId = e.dataTransfer.getData('text');
    const clickedElem = document.getElementById(sourceId);
    const droppedElem = document.getElementById(e.target.id);

    const clickedListId = clickedElem.parentNode.id;
    const droppedListId =
      droppedElem.nodeName === 'LI'
        ? droppedElem.parentNode.id
        : droppedElem.id;

    if (clickedListId === droppedListId) {
      return;
    }

    onToggleTodo(sourceId);
  };

  this.render = () => {
    this.$target.innerHTML = this.getTodosHTML(this.todos);
  };

  this.getTodoHTML = ({ _id, content, isCompleted }) => {
    return isCompleted
      ? `<li id="${_id}" class="todo completed" draggable="true" >${content}<button class="remove-button">X</button></li>`
      : `<li id="${_id}" class="todo" draggable="true" >${content}<button class="remove-button">X</button></li>`;
  };

  this.getTodosHTML = (todos) => {
    return todos.reduce((html, item) => {
      html += this.getTodoHTML(item);
      return html;
    }, '');
  };

  this.setState = (nextState) => {
    this.todos = [...nextState];
    this.render();
  };

  this.init();
}

export default TodoList;
