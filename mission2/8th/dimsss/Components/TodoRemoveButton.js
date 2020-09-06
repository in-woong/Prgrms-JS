export default function TodoRemoveAllButton(elementId, eventName) {
  this.elementId = elementId;
  this.eventName = eventName;

  this.createView = () => {
    return `<button id="${this.elementId}">할일 목록 전체 삭제</button>`;
  }

  this.createCustomEvent = () => {
    return (e) => {
      
      if (e.target.id === this.elementId) {
        const removeAllTodo = () => {
          this.root.child['todoList'].setState([]);
          this.root.storage.todoSetItem([]);
          this.root.render(this.root.createHTML());
        }
        e.target.dispatchEvent(new CustomEvent('removeAll', { bubbles: true, detail: { removeAllTodo } }));
      }
    }
  }
}
