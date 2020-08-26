function TodoList({
  $todoName,
  $target,
  onTodoItemClick,
  onTodoItemRemove,
  data,
  todoApi,
}) {
  this.$todoName = $todoName
  this.$target = $target
  this.onTodoItemClick = onTodoItemClick
  this.onTodoItemRemove = onTodoItemRemove
  this.data = data || { todoList: [], loading: false, error: null }
  this.todoApi = todoApi

  this.$target.addEventListener('dragstart', function (e) {
    if( e.target.dataset?.id )
      e.dataTransfer.setData('text/plain', e.target.dataset.id)
  })

  this.$target.addEventListener('click', function (e) {
    const id = e.target.closest('li').dataset.id
    if (e.target.className === 'remove-button') {
      e.stopPropagation()
      onTodoItemRemove(id)
    } else {
      onTodoItemClick(id)
    }
  })

  this.setState = function (nextData) {
    this.data = nextData
    this.render()
  }

  this.render = function () {
    this.$todoName.innerHTML = todoApi.username
    const htmlString = this.data.todoList.map(function (todo) {
      const contentHTML = todo.isCompleted
        ? `<strike>${todo.content}</strike>`
        : `${todo.content}`

      return `
        <li draggable="true" class="hand-cursor" data-id="${todo._id}">
          ${contentHTML}
          <button class="remove-button">Remove</button>
        </li>
      `
    })
    $target.innerHTML = `<ul>${htmlString.join('')}</ul>`
  }

  this.render()
}

export default TodoList
