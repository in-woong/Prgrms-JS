function TodoCount(todoList, elementId) {
  if (!(this instanceof TodoCount)) {
    throw new Error('error: invalid function TodoCount call!');
  }
  this.todoList = todoList;
  this.elementId = elementId;
  this.elementDom = document.querySelector(`#${this.elementId}`);
  this.elementTotalDom = document.querySelector(
    `#${this.elementId} .completedTotalNumber`
  );
  this.render = () => {
    const numberOfCompleted = this.todoList.filter((list) => list.isCompleted)
      .length;
    this.elementTotalDom.innerHTML = numberOfCompleted;
  };
  this.render();

  // changeList
  this.elementDom.addEventListener('changeList', (event) => {
    this.todoList = event.detail;
    this.render();
  });
}

export default TodoCount;
