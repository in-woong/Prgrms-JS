function TodoList($target, data, eventInfoObj) {
  this.$target = $target
  this.data = data
  this.onClick = eventInfoObj.onClick
  this.render = function() {
    this.$target.innerHTML = this.data
      .map(
        (todo, index) =>
          `<li id="todo-item-${index}"> 
          ${todo.isCompleted ? '<s>' : ''}
           ${todo.text} 
          ${todo.isCompleted ? '</s>' : ''} 
          <button id="todo-remove-${index}">삭제</button>
          </li>
          `
      )
      .join('')
  }
  this.render()
  this.$target.addEventListener('click', e => {
    this.onClick(e)
  })
}
