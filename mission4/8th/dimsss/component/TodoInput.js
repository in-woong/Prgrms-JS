export default function TodoInput(appElement) {
  this.init = () => {
    this.element = document.createElement('input');
    this.element.id = 'todo-input';
    appElement.appendChild(this.element);
  }

  this.render = () => {
    this.element.innerHTML = `<input id="todo-input" type="text" />`;
  }

  this.init();
}
