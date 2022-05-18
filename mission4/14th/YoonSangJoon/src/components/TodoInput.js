export default class TodoInput {
  constructor({ $root, createDOMElement, addTodo, deleteTodoAll }) {
    this.$root = $root;
    this.createDOMElement = createDOMElement;
    this.addTodo = addTodo;
    this.deleteTodoAll = deleteTodoAll;

    this.todoForm = this.createDOMElement('form', [
      { attr: 'class', value: 'new-todo' },
    ]);
    this.todoInput = this.createDOMElement('input', [
      { attr: 'type', value: 'text' },
      { attr: 'class', value: 'new-todo__input' },
      { attr: 'placeholder', value: '할 일을 입력해주세요.' },
    ]);
    this.addTodoBtn = this.createDOMElement('button', [
      { attr: 'type', value: 'submit' },
      { attr: 'class', value: 'new-todo__add btn' },
      { attr: 'textContent', value: '등록' },
    ]);
    this.removeAllBtn = this.createDOMElement('button', [
      { attr: 'class', value: 'new-todo__remove btn' },
      { attr: 'textContent', value: '전부 삭제' },
    ]);

    this.todoForm.appendChild(this.todoInput);
    this.todoForm.appendChild(this.addTodoBtn);
    this.todoForm.appendChild(this.removeAllBtn);

    this.addTodoListener = this.addTodoListener.bind(this);
    this.todoForm.addEventListener('submit', this.addTodoListener);

    this.addHandlerRemoveAll = this.addHandlerRemoveAll.bind(this);
    this.todoForm.addEventListener('click', this.addHandlerRemoveAll);

    this.removeAllEvent = this.removeAllEvent.bind(this);
    this.$root.addEventListener('removeAll', this.deleteTodoAll);

    this.render();
  }

  render() {
    this.$root.appendChild(this.todoForm);
    this.todoInput.focus();
  }

  addTodoListener(e) {
    if (this.todoInput.value.trim()) {
      e.preventDefault();
      this.addTodo(this.todoInput.value);
      this.todoInput.value = '';
    }
  }

  addHandlerRemoveAll(e) {
    if (e.target.textContent === '전부 삭제') {
      e.preventDefault();
      this.$root.dispatchEvent(new CustomEvent('removeAll', { bubbles: true }));
    }
  }

  removeAllEvent(e) {
    this.$root.addEventListener('removeAll', this.deleteTodoAll);
    e.preventDefault();
  }
}
