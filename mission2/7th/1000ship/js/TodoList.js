export default function TodoList(app, $listEl) {
  this.app = app
  this.$listEl = $listEl

  this.todoClickEvent = function (e) {
    const clickedTarget = e.target
    const clickedIndex = Array.from(e.currentTarget.children).findIndex((node) =>
      ((t) => node.contains(t))(clickedTarget)
    )
    if (clickedIndex === -1) return
    if (e.target.className === 'del-button')
      this.app.todos.splice(clickedIndex, 1)
    else
      this.app.todos[clickedIndex].isCompleted = !this.app.todos[clickedIndex]
        .isCompleted
    this.app.setState(this.app.todos)
  }

  this.render = function () {
    const todoElements = this.app.todos.map((todo) => {
      const todoElement = document.createElement('li')
      todoElement.innerHTML = `${
        todo.isCompleted ? `<s>${todo.text}</s>` : todo.text
      } <a href="#" class="del-button">삭제</a>`
      return todoElement
    })

    while (this.$listEl.hasChildNodes())
      this.$listEl.removeChild(this.$listEl.firstChild)
    todoElements.forEach((element) => this.$listEl.appendChild(element))
  }

  this.$listEl.addEventListener('click', this.todoClickEvent.bind(this))
}
