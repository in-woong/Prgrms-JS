import { validateData } from '../utils/index.js';

export default class TodoList {
  constructor({
    $root,
    createDOMElement,
    initialState,
    currentUser,
    deleteTodo,
    toggleComplete,
    updateOnDragStart,
    updateOnDrop,
    isCompleted,
  }) {
    this.$root = $root;
    this.createDOMElement = createDOMElement;
    this.currentUser = currentUser;
    this.deleteTodo = deleteTodo;
    this.toggleComplete = toggleComplete;
    this.updateOnDragStart = updateOnDragStart;
    this.updateOnDrop = updateOnDrop;
    this.isCompleted = isCompleted;

    this.state = initialState;

    this.container = this.createDOMElement('div', [
      { attr: 'class', value: 'todo-list-container' },
    ]);
    this.userNameSection = this.createDOMElement('div', [
      { attr: 'class', value: 'current-user' },
    ]);
    this.todoList = this.createDOMElement('ul', [
      { attr: 'class', value: 'todo-list' },
    ]);

    this.container.dataset.completed = this.isCompleted;

    this.$root.appendChild(this.container);
    this.container.appendChild(this.userNameSection);
    this.container.appendChild(this.todoList);

    this.deleteTodoListener = this.deleteTodoListener.bind(this);
    this.todoList.addEventListener('click', this.deleteTodoListener);

    this.toggleCompleteListener = this.toggleCompleteListener.bind(this);
    this.todoList.addEventListener('click', this.toggleCompleteListener);

    this.onDragStart = this.onDragStart.bind(this);
    this.container.addEventListener('dragstart', this.onDragStart);

    this.onDragOver = this.onDragOver.bind(this);
    this.container.addEventListener('dragover', this.onDragOver);

    this.onDrop = this.onDrop.bind(this);
    this.container.addEventListener('drop', this.onDrop);

    validateData(this.state);

    this.render();
  }

  onDragStart(e) {
    this.updateOnDragStart(e.target.closest('li'));
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onDrop(e) {
    this.updateOnDrop(e.target);
    e.preventDefault();
  }

  render() {
    this.userNameSection.innerHTML = this.isCompleted
      ? `<span>${this.currentUser} 완료</span>`
      : `<span>${this.currentUser} 진행중</span>`;
    this.todoList.innerHTML = this.state
      .map((todo) => {
        if (todo.isCompleted === this.isCompleted) {
          return `<li id=${todo._id} class='${
            this.isCompleted ? 'todo completed' : 'todo'
          }' draggable='true' data-completed='${
            this.isCompleted ? true : false
          }'>${todo.content}<button>삭제</button></li>`;
        }
      })
      .join('');
  }

  setState(nextState, nextUserName) {
    this.state = nextState;
    this.currentUser = nextUserName;
    this.render();
  }

  async deleteTodoListener(e) {
    if (e.target.innerText === '삭제') {
      const todoId = e.target.closest('li').id;
      this.deleteTodo(todoId);
    } else {
      return;
    }
  }

  async toggleCompleteListener(e) {
    if (e.target.nodeName === 'S' || e.target.nodeName === 'LI') {
      const id =
        e.target.nodeName === 'LI' ? e.target.id : e.target.closest('li').id;
      this.toggleComplete(id);
    } else {
      return;
    }
  }
}
