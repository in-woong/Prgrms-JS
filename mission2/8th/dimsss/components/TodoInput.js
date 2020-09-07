export default function TodoInput(elementId, eventName) {
  this.elementId = elementId;
  this.eventName = eventName;

  this.createView = function () {
    return `<input id="todo-input" type="text" autofocus />`;
  }
  
  this.createEvent = function (components) {
    return (e) => {
      if (e.key === 'Enter' && e.target.id === this.elementId) {
        components['todoList'].setState(e.target.value);
        this.root.storage.todoSetItem(components['todoList'].state);
        this.root.render(this.root.createHTML());
      }
    }
  }
}
