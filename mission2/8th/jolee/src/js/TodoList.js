function TodoList($target, data) {
  this.$target = $target
  this.data = data

  this.render = function () {
    this.$target.innerHTML = this.data
      .map(
        (todo) =>
          `<li class="todo-item">${
            todo.isCompleted ? `<s>${todo.text}</s>` : `${todo.text}`
          } <button class="delete-button">삭제</button></li>`
      )
      .join('')

    const $todoItems = document.querySelectorAll('.todo-item')
    $todoItems.forEach(($todoItem, index) => {
      $todoItem.addEventListener('click', () => {
        this.data[index].isCompleted = !this.data[index].isCompleted
        this.render()
      })
    })

    const $deleteTodoBtns = document.querySelectorAll('.delete-button')
    $deleteTodoBtns.forEach(($deleteTodoBtn, index) => {
      $deleteTodoBtn.addEventListener('click', () => {
        data.splice(index, 1)
        this.render()
      })
    })
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.render()
  }

  this.addTodoItem = function ({ todoText }) {
    const newTodoItem = {
      text: todoText,
      isCompleted: false,
    }

    this.data.push(newTodoItem)
    this.render()
    console.log(this.data)
  }

  this.render()
}
