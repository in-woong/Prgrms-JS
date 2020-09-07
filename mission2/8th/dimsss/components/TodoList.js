export default function TodoList (elementId, todos) {
  this.state = todos;
  this.elementId = elementId;

  this.createView = function () {
    return `<ul id="todo-list">${this.state.map((todoItem) => {
      return todoItem.isComplete ? `<li><s>${todoItem.text}</s></li>` : `<li>${todoItem.text}</li>` 
    }).join('')}</ul>`;
  }

  this.setState = function (newState) {
    if (Array.isArray(newState) && newState.length === 0) {
      this.state = newState;
      return;
    }
    this.state = [...this.state, { text: newState, isComplete: false }];
  }
}
