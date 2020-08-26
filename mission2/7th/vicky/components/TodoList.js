function TodoList(todoList, elementId) {
  if (!(this instanceof TodoList)) {
    throw new Error('error: invalid function TodoList call!');
  }
  this.todoList = todoList;
  this.elementId = elementId;
  this.elementDom = document.querySelector(`#${this.elementId}`);
  this.listDom = document.querySelector(`#${this.elementId} .content`);
  this.render = () => {
    if (!this.todoList.length) {
      this.listDom.innerHTML = '목록을 추가해주세요 :)';
      return;
    }
    this.listDom.innerHTML = this.todoList
      .map((todo) => {
        const { index, text, isCompleted = false } = todo;

        if (!text) {
          return;
        }
        return isCompleted
          ? `<li data-idx="${index}"><s>${text}</s><button type="text" name="deleteList"></button></li>`
          : `<li data-idx="${index}">${text}<button type="text" name="deleteList"></button></li>`;
      })
      .join('');
  };
  this.render();

  // changeList
  this.elementDom.addEventListener('changeList', (event) => {
    this.todoList = event.detail;
    this.render();
  });
}

export default TodoList;
