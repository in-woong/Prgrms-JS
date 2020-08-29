import View from './todoDefaultView.js';
import { createElement, getElement } from '../lib/utils.js';

const log = console.log;
const tag = '[todoListsView.js]';

export default class ListsView extends View {
  constructor() {
    super();
    this.$root = getElement('#todo-list');
    // return this;
  }
  setup() {
    this.$element = createElement('ul', 'todo-lists');
    this.$root.appendChild(this.$element);
  }
  render(lists = []) {
    if (!lists || !Array.isArray(lists)) return;
    this.$element.innerHTML = this.#getListsHTML(lists);
  }
  #getListsHTML(lists) {
    return lists.reduce((html, list) => (html += this.#getListHTML(list)), '');
  }
  #getListHTML(list) {
    const { text, isCompleted } = list;
    return `<li data-completed=${isCompleted}>${text}</li>`;
  }
}
