class TodoList {
  constructor({ target, onClick, onRemove }) {
    this.$target = document.querySelector(target);
    this.$title = document.querySelector('#todo-title');
    this.handleClick = onClick;
    this.handleRemove = onRemove;
    this.bindClickEvent();
  }

  renderTodoTitle(username) {
    this.$title.innerHTML = `${username}'s Todo List`;
  }

  renderLoading() {
    this.$target.innerHTML = '로딩중...';
  }

  bindClickEvent() {
    this.$target.addEventListener('click', (e) => {
      const { id } = e.target.closest('li').dataset;

      if (e.target.className === 'remove-button') {
        e.stopPropagation();
        this.handleRemove(id);
      } else {
        this.handleClick(id);
      }
    });
  }

  render(todos) {
    if (!todos || !todos.length) {
      this.$target.innerHTML = '할 일이 존재하지 않습니다.';
      return;
    }

    const todoList = todos.reduce((htmlString, { _id, isCompleted, content }) => {
      const contentHTML = isCompleted
        ? `<del>${content}</del>`
        : `${content}`;

      return `${htmlString}
        <li data-id="${_id}">
          ${contentHTML} 
          <button class="remove-button">Remove</button>
        </li>`;
    }, '');

    this.$target.innerHTML = `<ul>${todoList}</ul>`;
  }
}

export default TodoList;
