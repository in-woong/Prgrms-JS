function TodoList($app, data, deleteTodo, updateTodo) {
  const createLiElementString = (item, index) => {
    const spanElement = `<span id=todo-item data-index=${index}>${item.text}</span><button id='delete' data-index=${index}>x</button>`
    const liElement = item.isCompleted ? `<li><s>${spanElement}</s></li>` : `<li>${spanElement}</li>`

    return liElement
  }

  this.data = data
  this.$target = $app

  this.$target.addEventListener('click', (e) => {
    const eventTarget = e.target
    if (eventTarget.id === 'todo-item') {
      updateTodo(eventTarget.dataset.index)
    } else if (eventTarget.id === 'delete') {
      deleteTodo(Number(eventTarget.dataset.index))
    }
  })

  this.setState = function (newData) {
    this.data = newData
  }

  this.render = function () {
    const todoListString = this.data.reduce((acc, cur, id) => {
      return acc + createLiElementString(cur, id)
    }, '')
    this.$target.innerHTML = `<ul>${todoListString}</ul>`
  }
}
