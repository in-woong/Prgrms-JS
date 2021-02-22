export default function TodoList(targetElement, todoData, onChange) {
  if (todoData.length) {
    this.data = JSON.parse(todoData)
  } else {
    this.data = todoData
  }
  this.todoElement = targetElement

  // check validation
  if (!Array.isArray(this.data)) {
    throw new Error('data type error')
  }

  this.render = function () {
    this.todoElement.innerHTML = this.data
      .map(list => {
        return `${list.text ? `${list.isCompleted ? `<li class="completed">${list.text}</li>` : `<li>${list.text}</li>`}` : ``}`
      })
      .join('')

    // remove todolist
    this.todoElement.addEventListener('click', e => {
      if (e.target && e.target.nodeName === 'LI') {
        // 현재 자식 요소의 index
        const currentIdx = Array.from(e.currentTarget.children).indexOf(e.target)
        if (currentIdx !== -1) {
          e.target.classList.toggle('completed')

          const targetData = this.data[currentIdx]
          if (targetData.isCompleted) {
            targetData.isCompleted = false
          } else {
            targetData.isCompleted = true
          }

          onChange(this.data)
        }
      }
    })
  }

  this.setState = function (nextData) {
    this.data = nextData
    localStorage.setItem('data', JSON.stringify(this.data))
    this.render()
  }

  this.render()
}
