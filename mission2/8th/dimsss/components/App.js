export default function App () {
  this.init = () => {
    this.element = document.querySelector('#app');
    this.addCustomEvent();
  }

  this.addCustomEvent = () => {
    this.element.addEventListener('removeAll', () => {
      const todoListElement = document.querySelector('#todo-list');
      todoListElement.dispatchEvent(new CustomEvent('removeAll'));
    });
  }

  this.init();
}
