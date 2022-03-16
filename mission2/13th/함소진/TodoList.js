function TodoList($target, data, removeTodo, updateComplete) {
  this.data = data
  this.removeTodo = removeTodo
  this.updateComplete = updateComplete
  this.$target = $target
  this.$todoUl = document.createElement('ul')
  this.$target.append(this.$todoUl)

  const onClick = (event) => {
    const li = event.target.closest('.todo-list-item')
    if (li) {
      const index = li.id
      event.target.tagName == 'BUTTON'
        ? this.removeTodo(index)
        : this.updateComplete(index)
    }
  }

  this.render = (data = this.data) => {
    this.$todoUl.innerHTML = data
      .map(
        (todo, index) =>
          `<li class="todo-list-item" id=${index}><span> ${
            todo.isCompleted ? `<s>${todo.text}</s>` : `${todo.text}`
          } </span><button>삭제</button></li>`
      )
      .join('')

    this.$todoUl.addEventListener('click', onClick)
  }
  this.render()
}
