export default function TodoRemoveAllButton(elementId, eventName) {
  this.elementId = elementId;
  this.eventName = eventName;

  this.createView = () => {
    return `<button id="${this.elementId}">할일 목록 전체 삭제</button>`;
  }

  this.addEvent = () => {
    const removeAllEventHandler = (e) => {
      const todoListElement = document.querySelector('#todo-list');
      todoListElement.dispatchEvent(new CustomEvent('removeAll'));
    }
  
    this.element.addEventListener('click', removeAllEventHandler);
  }

  this.init = () => {
    const parentElement = document.querySelector('#app');
    parentElement.insertAdjacentHTML('beforeend', this.createView());
    this.element = document.querySelector(`#${this.elementId}`);

    this.addEvent();
  }

  this.init();
}
