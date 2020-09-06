export default function TodoCount(elementId) {
  this.elementId = elementId
  
  this.createView = () => {
    return `<div id="${elementId}">해야될 todo 갯수 : ${this.setTodoCount()} 완료된 todo 갯수 : ${this.setCompletedTodoCount()}</div>`;
  }

  this.setTodoCount = () => {
    const todoListComponent = this.root.child['todoList'].state;

    return todoListComponent.filter((todo) => {
      if (!todo.isComplete) {
        return todo;
      }
    }).length;
  }

  this.setCompletedTodoCount = () => {
    const todoListComponent = this.root.child['todoList'].state;
    
    return todoListComponent.filter((todo) => {
      if (todo.isComplete) {
        return todo;
      }
    }).length;
  }
}
