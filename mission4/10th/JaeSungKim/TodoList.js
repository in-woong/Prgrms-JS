function TodoList({ $target, initialData, onEvent, listType }) {
  if (!(this instanceof TodoList)) {
    return new TodoList({ $target, initialData, onEvent, listType })
  }

  const onToggle = onEvent.onToggle
  const onRemove = onEvent.onRemove
  const onDragDrop = onEvent.onDragDrop

  this.data = initialData || []
  this.type = listType || ''

  this.setState = (nextData) => {
    this.validateData(nextData)
    this.data = nextData
    this.render()
  }

  this.render = () => {
    let filteredData = this.data
    if (this.type === 'pend') {
      filteredData = this.data.filter((todo) => !todo.isCompleted)
    }
    if (this.type === 'done') {
      filteredData = this.data.filter((todo) => todo.isCompleted)
    }
    const htmlString = filteredData.map((todo) => {
      const contentHTML = todo.isCompleted ? `<strike>${todo.content}</strike>` : `${todo.content}`

      return `
        <li class="todo-text" data-id="${todo._id}" draggable="true">
          ${contentHTML}
          <button class="remove-button">Remove</button>
        </li>`
    })

    $target.innerHTML = `<ul id='todo-list'>${htmlString.join('')}</ul>`
  }

  this.validateData = (todoData) => {
    if (!todoData) {
      throw new Error('Data is null or undefined')
    }
    if (!Array.isArray(todoData)) {
      throw new Error('Data is not an Array')
    }
    if (todoData.some((item) => !item || typeof item.content !== 'string' || typeof item.isCompleted !== 'boolean' || !item._id.match(/^[0-9a-z]+$/))) {
      throw new Error('Data format is not supported')
    }
  }

  this.validateData(this.data)
  this.render()

  $target.addEventListener('click', function (e) {
    const id = e.target.closest('li').dataset.id
    if (e.target.className === 'remove-button') {
      e.stopPropagation()
      onRemove(id)
    } else {
      onToggle(id)
    }
  })

  $target.addEventListener('dragstart', (e) => {
    const dragId = e.target.closest('li').dataset.id
    e.dataTransfer.setData('dragDropTodo', dragId)
    e.dataTransfer.dropEffect = 'move'
  })

  $target.addEventListener('dragover', (e) => {
    e.preventDefault()
  })

  $target.addEventListener('drop', (e) => {
    e.stopPropagation()
    const dropId = e.dataTransfer.getData('dragDropTodo')
    const currentTaskType = this.data.filter((item) => item._id === dropId)[0].isCompleted ? 'done' : 'pend'
    if (this.type != currentTaskType) {
      onDragDrop(dropId)
    }
  })
}
