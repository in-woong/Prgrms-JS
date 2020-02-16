function TodoList($target, data) {
  this.$target = $target
  this.data = data

  this.render = function() {
    this.$target.innerHTML = this.data
      .map(
        todo =>
          `<div> ${todo.isCompleted ? '<s>' : ''}
          <span class="todoItem" id="todo-item-${todo.index}">  ${todo.text} 
          </span> ${todo.isCompleted ? '</s>' : ''} 
          <button class="removeBtn" id="todo-remove-${todo.index}">삭제</button>
          </div>
          `
      )
      .join('')
  }
  this.getTodoItems = function() {
    return document.querySelectorAll('.todoItem')
  }
  this.getRemoveButtons = function() {
    return document.querySelectorAll('.removeBtn')
  }
  this.render()
}
