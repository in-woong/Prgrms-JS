export default function TodoList(targetElement, todoData, onChange) {
  this.data = todoData
  this.todoElement = targetElement

  // check validation
  if (!Array.isArray(this.data)) {
    throw new Error('data type error')
  }

  this.render = function () {
    this.todoElement.innerHTML = this.data
      .map((list, idx) => {
        return `${list.text ? `${list.isCompleted ? `<li id=${idx} class="completed">${list.text}</li>` : `<li id=${idx}>${list.text}</li>`}` : ``}`
      })
      .join('')

    // remove todolist
    this.todoElement.addEventListener('click', e => {
      e.target.classList.toggle('completed')
      const idx = e.target.id
      this.data[idx].isCompleted = this.data[idx].isCompleted ? false : true
    })
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}
