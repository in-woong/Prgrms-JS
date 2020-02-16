function TodoList($target, data) {
  this.$target = $target
  this.data = data

  this.render = function() {
    this.$target.innerHTML = this.data
      .map(
        todo =>
          `<li id="todo-item-${todo.index}"> 
          ${todo.isCompleted ? '<s>' : ''}
           ${todo.text} 
          ${todo.isCompleted ? '</s>' : ''} 
          <button id="todo-remove-${todo.index}">삭제</button>
          </li>
          `
      )
      .join('')
  }
  this.render()
}
