import {
  loadTodoListAPI,
  updateTodoListAPI,
  deleteTodoAPI,
} from '../api/api.js';
function checkDataFomat(data) {
  if (!Array.isArray(data) && data.text) {
    throw new TypeError('ERROR: TYPE ERROR');
  }
}
function TodoList({
  initialState,
  todoListContainer,
  toggle,
  getList,
  onDelete,
}) {
  if (!new.target) {
    throw new Error('ERROR : NOT USED NEW KEYWORD');
  }
  const todoUl = document.createElement('ul');
  todoListContainer.append(todoUl);
  this.user = initialState.selectUser;
  this.state = initialState.todos;

  this.render = function (paramData) {
    this.state = paramData ? paramData.todos : this.state;
    this.user = paramData ? paramData.selectUser : this.user;
    if (this.state.length > 0 && this.user !== 'jiyeonUm') {
      todoUl.innerHTML = `
            ${this.state
              .map((value, index) =>
                value.isCompleted
                  ? `<li data-index="${index}" data-id="${value._id}"><s>${value.content}</s></li>`
                  : `<li data-index="${index}" data-id="${value._id}">${
                      value.content +
                      ` ${
                        this.user === 'jiyeonUm'
                          ? `<button class="delete-todo" data-id="${value._id}" type="button">삭제</button>`
                          : ''
                      }`
                    }</li>`
              )
              .join('')}
          `;
    } else {
      loadTodoListAPI({
        loadTodo: (loadList) => {
          this.state = loadList;
          getList(loadList);
          todoUl.innerHTML = `
            ${this.state
              .map((value, index) =>
                value.isCompleted
                  ? `<li data-index="${index}" data-id="${value._id}"><s>${value.content}</s></li>`
                  : `<li data-index="${index}" data-id="${value._id}">${value.content}<button class="delete-todo" data-id="${value._id}" type="button">삭제</button></li>`
              )
              .join('')}
          `;
        },
      });
    }

    todoUl.addEventListener('click', (e) => {
      e.stopImmediatePropagation();

      const selectTodoId =
        e.target.dataset.id || e.target.parentNode.dataset.id;
      const selectTodoIndex =
        e.target.dataset.index || e.target.parentNode.dataset.index;

      if (e.target.tagName === 'LI' || e.target.tagName === 'S') {
        updateTodoListAPI({
          id: selectTodoId,
          updateTodo: (data) => {
            const message = data.message.split(' ');
            toggle(message[2], selectTodoIndex);
          },
        });
      } else {
        deleteTodoAPI({
          id: selectTodoId,
          deleteTodo: (data) => {
            const message = data.message.split(' ');
            onDelete(message[2], selectTodoIndex);
          },
        });
      }
    });
  };
  this.setState = function (nextData) {
    checkDataFomat(nextData);
    this.render(nextData);
  };

  this.render();
}
export default TodoList;
