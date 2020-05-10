function TodoList($target, data) {
  this.$target = $target
  this.data = data

  this.render = function() {
    this.$target.innerHTML = 
      this.data
      .map(
        (todo, id) =>
        `
        <li class="todo-data__list-item">
          <div class="checkbox">
            <input type="checkbox" class="checkbox-input" id="input-check${id}">
            <label for="input-check${id}" class="label">${todo.text}</label>
          </div>
          <div class="button-group">
            <button class="button button-icon button-delete">
            <span class="button-icon-text">삭제</span>
            <i class="button-icon-symbol" aria-hidden="true">&#10005;</i>
            </button>
          </div>
        </li>
        `
      )
      .join('')
  }

  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}
