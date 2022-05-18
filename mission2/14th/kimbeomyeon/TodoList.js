function TodoList({ $target, initialState }) {
  this.$element = document.createElement('ul');
  $target.appendChild(this.$element);

  this.state = initialState;

  this.render = function () {
    this.$element.innerHTML = this.state
      .map(
        ({ text, isCompleted }, index) =>
          `<li>
            ${isCompleted ? `<s>${text}</s>` : text}
            <button class="todo-btn" data-index="${index}">
              ${isCompleted ? '복구' : '완료'}
            </button>
          </li>`
      )
      .join('');
  };

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.onClickBtn = function ({ target }) {
    const isBtn = target.classList.contains('todo-btn');

    if (!isBtn) return;

    const clickedIdx = Number(target.getAttribute('data-index'));

    const newState = this.state.map((value, index) =>
      index === clickedIdx
        ? { ...value, isCompleted: !value.isCompleted }
        : value
    );

    this.setState(newState);
  };

  this.render();
  $target.addEventListener('click', this.onClickBtn.bind(this));
}
