export default function TodoInput(elementId) {
  this.elementId = elementId;

  this.createView = function () {
    return `<input id="todo-input" type="text" autofocus />`;
  }

  this.addEvent = () => {
    const addTodoEventHandler = (e) => {
      if (e.key === 'Enter' && e.target.id === this.elementId && this.isValidate(e.target.value)) {
        const eventTargetElement = document.querySelector('#todo-list');
        eventTargetElement.dispatchEvent(new CustomEvent('addTodo', {detail: { newTodo: e.target.value}})); 
      }
    }
    this.element.addEventListener('keydown', addTodoEventHandler);
  }

  this.init = () => {
    const parentElement = document.querySelector('#app');

    if (parentElement) {
      parentElement.insertAdjacentHTML('beforeend', this.createView());

      this.element = document.querySelector('#todo-input');
      this.addEvent();
    }
  }

  this.isValidate = (text) => {
    if (text === '') return false;
    if (text.replaceAll(' ', '') === '') return false;
    return true;
  }

  this.init();
}
