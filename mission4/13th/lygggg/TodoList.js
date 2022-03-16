export default function TodoList(params) {
  this.target = params.app
  this.onClick = params.onClick
  this.onRemove = params.onRemove
  this.data = params.data
  this.itemId = null
  this.itemClassName = null
  this.todoList = document.createElement('div')
  this.todoList.className = 'container'
  this.target.appendChild(this.todoList)

  this.todoList.addEventListener('dragstart', (e) => {
    this.itemClassName = e.target.parentNode.className
    const id = e.target.closest('li').dataset.id
    this.itemId = id
  })

  this.todoList.addEventListener('dragover', (e) => {
    e.preventDefault()
  })

  this.todoList.addEventListener('drop', (e) => {
    const className = e.target.className
    if (className == 'complete-container' && className !== this.itemClassName) {
      this.onClick(this.itemId)
    }

    if (
      className == 'not-complete-container' &&
      className !== this.itemClassName
    ) {
      this.onClick(this.itemId)
    }
  })

  this.todoList.addEventListener('click', (e) => {
    const id = e.target.closest('li').dataset.id

    if (e.target.className === 'remove-button') {
      e.stopPropagation()
      this.onRemove(id)
    }
    if (e.target.className === 'complete-button') {
      this.onClick(id)
    }
  })

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  const printList = (data) => {
    return data.map(function (todo) {
      const contentHTML = `${todo.content}`

      return `<li class="draggable" draggable="true" data-id="${todo._id}">${contentHTML}
      <button class="complete-button">완료</button>
      <button class="remove-button">제거</button>
      </li>`
    })
  }

  this.render = () => {
    const isCompleteData = this.data.filter((e) => e.isCompleted === true)
    const isNotCompleteData = this.data.filter((e) => e.isCompleted === false)

    const isCompleteHtml = printList(isCompleteData)

    const isNotCompleteHtml = printList(isNotCompleteData)

    this.todoList.innerHTML =
      isCompleteHtml.length > 0 || isNotCompleteData.length > 0
        ? `<div>완료</div><ul class="complete-container">${isCompleteHtml.join(
            ''
          )}</ul> <div>미완료</div><ul class="not-complete-container">${isNotCompleteHtml.join(
            ''
          )}</ul>`
        : `<div></div>`
  }

  this.render()
}
