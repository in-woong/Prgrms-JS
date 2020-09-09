export default class TodoRemoveButton {
  constructor(targetEl, onRemoveAll) {
    this.targetEl = targetEl;
    this.onRemoveAll = onRemoveAll;
    this.render();
  }

  getTodoRemoveAllButton() {
    const buttonEl = document.createElement('button');
    buttonEl.setAttribute('type', 'button');
    buttonEl.textContent = '모두 삭제';
    buttonEl.addEventListener('click', this.onRemoveAll);
    return buttonEl;
  }

  render() {
    const buttonEl = this.getTodoRemoveAllButton();
    this.targetEl.appendChild(buttonEl);
  }
}