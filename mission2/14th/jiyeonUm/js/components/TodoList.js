function checkDataFomat(data) {
  if (!Array.isArray(data) && data.text) {
    throw new TypeError('ERROR: TYPE ERROR');
  }
}
function TodoList({ initialState, todoListContainer, onRemove, onChange }) {
  if (!new.target) {
    throw new Error('ERROR : NOT USED NEW KEYWORD');
  }
  checkDataFomat(initialState);
  this.state = initialState;
  const todoUl = document.createElement('ul');
  todoListContainer.append(todoUl);

  this.render = function (paramData) {
    const todoDataList = paramData || this.state;
    todoUl.innerHTML = `
            ${todoDataList
              .map((value, index) =>
                value.isCompleted
                  ? `<li data-index="${index}"><s>${value.text}</s></li>`
                  : `<li data-index="${index}">${value.text}<button class="delete-todo" data-index="${index}" type="button">삭제</button></li>`
              )
              .join('')}
          `;
    todoUl.addEventListener('click', (e) => {
      e.stopImmediatePropagation();

      const selectTodoIndex =
        e.target.dataset.index || e.target.parentNode.dataset.index;

      e.target.tagName === 'LI' || e.target.tagName === 'S'
        ? onChange(Number(selectTodoIndex))
        : onRemove(Number(selectTodoIndex));
    });
  };
  this.setState = function (nextData) {
    checkDataFomat(nextData);
    this.render(nextData);
  };
  this.render();
}
export default TodoList;
