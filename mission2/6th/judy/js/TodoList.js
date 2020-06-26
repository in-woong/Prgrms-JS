function TodoList($target, data) {

  this.$target = $target
  this.data = data

  this.render = (data) => {
    this.$target.querySelector('.todo-data__listbox').innerHTML =
      this.data
        .map(
          (todo, id) =>
            `
            <li class="todo-data__list-item">
              <div class="checkbox">
                <input type="checkbox" class="checkbox-input" id="input-check${id}" ${todo.isCompleted ? '' : 'checked'}> 
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

    // data가 없을 경우 아래 노출 
    //this.$target.innerHTML =
    //`<p class="todo-data__nodata" style="display: none;">&#128588; 해야 할 일이 없습니다 &#128588;</p>`

  }

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.render()
}