import View from '../core/View.js';
import { delegate, qs } from '../util/helper.js';

export default class TodoListView extends View {
  constructor() {
    super(qs('#todo-list-view'));
    this.template = new Template();

    this.bindEvents();
  }

  bindEvents() {
    delegate(this.element, 'click', 'button.btn-remove', (event) => {
      this.removeTodo(event);
    });
    delegate(this.element, 'click', 'p', (event) => {
      this.toggleTodoComplete(event);
    });
  }

  removeTodo(event) {
    const id = event.target.closest('li').dataset.id;
    this.emit('@remove', { id });
  }

  toggleTodoComplete(event) {
    const id = event.target.closest('li').dataset.id;
    this.emit('@toggle', { id });
  }

  show(todos = []) {
    this.element.innerHTML =
      todos.length > 0
        ? this.template.getList(todos)
        : this.template.getEmptyMessage();
    super.show();
  }
}

class Template {
  getEmptyMessage() {
    return `
            <div class="empty-box">데이터가 없습니다!</div>
        `;
  }

  getList(datas = []) {
    return `
            <ul class="todo-list">
                ${datas.map(this._getItem).join('')}
            </ul>
        `;
  }

  _getItem({ id, text, isCompleted }) {
    return `
        <li class=${
          isCompleted ? '"todo-list-item completed"' : '"todo-list-item"'
        } data-id="${id}">
          <p>${text}</p>
          <button class="btn-remove"></button>
        </li>
    `;
  }
}
