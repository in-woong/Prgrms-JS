import { $ } from '../utils/index.js';

export default class TodoInput {
  constructor({ addTodoState, removeAllState }) {
    this.root = $('#root');
    this.todoForm = document.createElement('form');
    this.todoForm.classList.add('new-todo');

    this.todoInput = document.createElement('input');
    this.todoInput.setAttribute('type', 'text');
    this.todoInput.classList.add('new-todo__input');
    this.todoInput.placeholder = '할 일을 입력해주세요.';

    this.addTodoBtn = document.createElement('button');
    this.addTodoBtn.setAttribute('type', 'submit');
    this.addTodoBtn.classList.add('new-todo__add');
    this.addTodoBtn.classList.add('btn');
    this.addTodoBtn.textContent = '등록';

    this.removeAllBtn = document.createElement('button');
    this.removeAllBtn.classList.add('new-todo__remove');
    this.removeAllBtn.classList.add('btn');
    this.removeAllBtn.textContent = '전부 삭제';

    this.todoForm.appendChild(this.todoInput);
    this.todoForm.appendChild(this.addTodoBtn);
    this.todoForm.appendChild(this.removeAllBtn);

    this.addTodoState = addTodoState;
    this.removeAllState = removeAllState;

    this.addTodoListener = this.addTodoListener.bind(this);
    this.todoForm.addEventListener('submit', this.addTodoListener);

    this.addHandlerRemoveAll = this.addHandlerRemoveAll.bind(this);
    this.todoForm.addEventListener('click', this.addHandlerRemoveAll);

    this.removeAllEvent = this.removeAllEvent.bind(this);
    this.root.addEventListener('removeAll', this.removeAllState);

    this.render();
  }

  render() {
    this.root.appendChild(this.todoForm);
    this.todoInput.focus();
  }

  addTodoListener(e) {
    if (this.todoInput.value.trim()) {
      this.addTodoState({ text: this.todoInput.value, isCompleted: false });
      this.todoInput.value = '';
      e.preventDefault();
    }
  }

  addHandlerRemoveAll(e) {
    if (e.target.textContent === '전부 삭제') {
      e.preventDefault();
      this.root.dispatchEvent(new CustomEvent('removeAll', { bubbles: true }));
    }
  }

  removeAllEvent(e) {
    this.root.addEventListener('removeAll', this.removeAllState);
    e.preventDefault();
  }
}
