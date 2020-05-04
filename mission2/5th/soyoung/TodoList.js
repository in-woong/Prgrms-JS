function TodoList($target, data, { onToggle, onDelete }) {
  this.$target = $target
  this.data = data
  this.onToggle = onToggle
  this.onDelete = onDelete
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

    this.$target.addEventListener('click', e => {
      if (e.target.nodeName === 'BUTTON') {
        const targetIndex = Number(e.target.id.split('-')[2])
        this.onDelete(targetIndex)
      } else if (e.target.nodeName === 'S') {
        const targetIndex = Number(e.target.parentNode.id.split('-')[2])
        this.onToggle(targetIndex)
      } else if (e.target.nodeName === 'LI') {
        const targetIndex = Number(e.target.id.split('-')[2])
        this.onToggle(targetIndex)
      }
    })
  }
  this.setState = data => {
    this.data = data
    this.render()
  }
  this.render()
}
