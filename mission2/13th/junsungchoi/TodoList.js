export default function TodoList ({ $target, initialState = {}, deleteTodo, toggleTodo, }) {
  this.state = initialState;
  this.$target = $target;
  this.deleteTodo = deleteTodo;
  this.toggleTodo = toggleTodo;

  this.$todoList = document.createElement('ul');
  this.$target.appendChild(this.$todoList);

  if (!Array.isArray(initialState)) {
    throw new Error('데이터 형태를 확인해 주세요.')
  };

  if (!new.target) {
    throw new Error('new keword를 붙여주세요.')
  };

  this.render = function () {
    this.$todoList.innerHTML = `
      ${this.state.map((item, index) =>
        `<li class="todo-item" data-index=${index}>
          ${item.isCompleted ? `<del>${item.text}</del>` : item.text}
          <button data-index=${index} class="delete-button">삭제</button>
        </li>`)
        .join('')
      }`;
  };

  this.$todoList.addEventListener('click', (e) => {
    const $li = e.target.closest('li');
    const index = Number($li.dataset.index);

    if (e.target.tagName === 'LI' || e.target.tagName === 'DEL') {
      toggleTodo(index);
    } else if (e.target.tagName === 'BUTTON') {
      deleteTodo(index);
    }
  });

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();
};
