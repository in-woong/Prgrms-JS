export default function TodoList({ $app, initialState }) {
  this.state = initialState
  this.$todoList = document.createElement('ul')
  $app.appendChild(this.$todoList)
  this.$todoList.addEventListener('click', function (e) {
    const id = e.target.closest('li').dataset.id

    if (e.target.className === 'remove-button') {
      e.stopPropagation()
      onRemove(id)
    } else {
      onClick(id)
    }
  })

  this.setState = function (nextData) {
    this.state = nextData
    this.render()
  }

  this.render = function () {
    if (this.state.isLoading) {
      this.$todoList.innerHTML = `현재 데이터를 불러오고 있습니다... logging...`
    } else {
      const htmlString = this.state.todos
        .map(function (todo) {
          const contentHTML = todo.isCompleted ? `<strike>${todo.content}</strike>` : `${todo.content}`
          return `<li data-id="${todo._id}">${contentHTML} <button class="remove-button">Remove</button></li>`
        })
        .join('')

      this.$todoList.innerHTML = htmlString
    }
  }

  this.render()
}
