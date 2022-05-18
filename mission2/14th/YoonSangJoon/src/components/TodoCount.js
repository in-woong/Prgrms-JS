import { $ } from '../utils/index.js';

export default class TodoCount {
  constructor({ initialState }) {
    this.root = $('#root');
    this.container = document.createElement('div');
    this.container.classList.add('todo-count');
    this.todoCount = document.createElement('span');
    this.container.appendChild(this.todoCount);
    this.root.appendChild(this.container);

    this.state = initialState;
    this.render();
  }

  render() {
    const total = this.state.length;
    const completed = this.state.filter((todo) => todo.isCompleted).length;
    this.todoCount.innerText = `총 : ${total}, 완료 : ${completed}`;
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }
}
