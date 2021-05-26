function TodoInput({ $app, onSubmit}) {
  this.$target = document.createElement('form');
  $app.appendChild(this.$target);

  this.$target.addEventListener('submit', (e) => {
    e.preventDefault();
    const $input = this.$target.querySelector('.todo-input');
    onSubmit($input.value);
    $input.value = '';
  })

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render = () => {
    this.$target.innerHTML = `
      <input type="text" class="todo-input"/>
      <button class="add-todo-button">추가</button>
    `
  }

  this.render();
}

export default TodoInput;