export default function TodoList ({ $target, initialState, deleteTodo, toggleTodo, }) {
  this.state = initialState;
  this.$target = $target;
  this.deleteTodo = deleteTodo;
  this.toggleTodo = toggleTodo;

  this.$todoList = document.createElement('ul');
  this.$target.appendChild(this.$todoList);

  this.render = function () {
    this.$todoList.innerHTML = `
      ${this.state.map(({ _id, content, isCompleted }) =>
        `<li class="todo-item" data-id=${_id}>
          ${isCompleted ? `<del>${content}</del>` : content}
          <button data-index=${_id} class="delete-button">삭제</button>
        </li>`)
        .join('')
      }`;
  };

  this.$todoList.addEventListener('click', (e) => {
    const $li = e.target.closest('li');
    const id = $li.dataset.id;

    if (e.target.tagName === 'LI' || e.target.tagName === 'DEL') {
      toggleTodo(id);
    } else if (e.target.tagName === 'BUTTON') {
      deleteTodo(id);
    }
  });

  this.setState = function (nextState) {
    if (!Array.isArray(nextState)) {
      throw new Error('데이터 형태를 확인해 주세요.')
    };

    this.state = nextState;
    this.render();
  };

  this.render();
};
