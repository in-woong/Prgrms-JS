export default function TodoList(targetElement, todoData, onChange) {
  this.data = todoData
  this.todoElement = targetElement

  // check validation
  if (!Array.isArray(this.data)) {
    throw new Error('data type error')
  }

  this.render = function () {
    this.todoElement.innerHTML = this.data
      .map(list => {
        return `${list.text ? `${list.isCompleted ? `<li><s>${list.text}</s></li>` : `<li><div>${list.text}</div></li>`}` : ``}`
      })
      .join('')

    const listElements = document.querySelectorAll('li')

    // list completed event
    listElements.forEach((list, idx) => {
      list.addEventListener('click', e => {
        const currentData = this.data[idx]
        if (currentData.isCompleted) {
          currentData.isCompleted = false
        } else {
          currentData.isCompleted = true
        }
        onChange(this.data)
      })
    })
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}
