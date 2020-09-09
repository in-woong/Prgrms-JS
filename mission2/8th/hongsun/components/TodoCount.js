export default class TodoCount {
  constructor(targetEl, count) {
    this.targetEl = targetEl;
    this.count = count;
    this.render();
  }

  getTodoCountElement() {
    const todoCountEl = document.createElement('p');
    todoCountEl.textContent = `현재 ToDo ${this.count}개`;
    return todoCountEl;
  }

  setState(nextCount) {
    this.count = nextCount;
    this.render();
  }

  render() {
    const prevCountEl = this.targetEl.querySelector('p');
    prevCountEl && prevCountEl.remove();
    const countEl = this.getTodoCountElement();
    this.targetEl.appendChild(countEl);
  }
}