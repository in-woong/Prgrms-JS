import { $, validateData, validateText } from '../utils/index.js';

export default class TodoList {
  constructor({ initialState, setGlobalState }) {
    this.root = $('#root');
    this.todoList = document.createElement('ul');
    this.todoList.classList.add(`todo-list`);
    this.root.appendChild(this.todoList);
    this.removeTodoListener = this.removeTodoListener.bind(this);
    this.toggleCompleteListener = this.toggleCompleteListener.bind(this);
    this.todoList.addEventListener('click', this.removeTodoListener);
    this.todoList.addEventListener('click', this.toggleCompleteListener);
    this.state = initialState;
    validateData(this.state);
    this.setGlobalState = setGlobalState;

    this.render();
  }

  render() {
    this.todoList.innerHTML = this.state.reduce((acc, item, idx) => {
      validateText(item.text);
      return item.isCompleted
        ? `${acc}<li id=${idx}><s>${item.text}</s><button>삭제</button></li>`
        : `${acc}<li id=${idx}>${item.text}<button>삭제</button></li>`;
    }, '');
  }

  setState(nextState) {
    validateData(nextState);
    this.state = nextState;
    this.render();
  }

  removeTodoListener(event) {
    if (event.target.innerText === '삭제') {
      const idx = event.target.closest('li').id;
      this.state.splice(idx, 1);
      this.setGlobalState(this.state);
    } else {
      return;
    }
  }

  toggleCompleteListener(event) {
    if (event.target.nodeName === 'S' || event.target.nodeName === 'LI') {
      const idx =
        event.target.nodeName === 'LI'
          ? event.target.id
          : event.target.closest('li').id;
      this.state[idx].isCompleted = !this.state[idx].isCompleted;
      this.setGlobalState(this.state);
    } else {
      return;
    }
  }
}
