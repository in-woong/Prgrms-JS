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
    const htmlString = this.state.map(function (todo) {
      const contentHTML = todo.isCompleted ? `<strike>${todo.content}</strike>` : `${todo.content}`
      return `<li data-id="${todo._id}">${contentHTML} <button class="remove-button">Remove</button></li>`
    })

    this.$todoList.innerHTML = `<ul>${htmlString.join('')}</ul>`
  }

  this.render()
}
