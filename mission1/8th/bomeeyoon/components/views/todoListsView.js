import View from './todoDefaultView.js';
import { createElement, getElement } from '../lib/utils.js';

const log = console.log;
const tag = '[todoListsView.js]';

export default class ListsView extends View {
  constructor(tag, className) {
    super();
    this.tag = tag;
    this.className = className;
    this.$root = getElement('#todo-list');
    this.setup();
    return this;
  }
  setup() {
    this.$element = createElement(this.tag, this.className);
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
    const $list = `<li data-completed=${isCompleted}>${text}</li>`;
    const $s = `<li data-completed=${isCompleted}><s>${text}</s></li>`;
    return isCompleted ? $s : $list;
  }
}
