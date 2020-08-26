class TodoList {
  constructor(parentId) {
    this.parentTag = this.getParentTag(parentId)
  }

  validateTodo(todo) {
    if (typeof todo.id !== 'number')
      throw new Error(`Invalid id property of todo: ${todo.id}`)

    if (typeof todo.text !== 'string')
      throw new Error(`Invalid text property of todo: ${todo.text}`)

    if (typeof todo.isCompleted !== 'boolean')
      throw new Error(
        `Invalid isComplted property of todo: ${todo.isCompleted}`
      )
  }

  render() {
    this.parentTag.innerHTML = ''
    this.todos.forEach((todo) => {
      const todoElement = this.createTodo(todo)
      this.parentTag.appendChild(todoElement)
    })
  }

  getParentTag(parentId) {
    const parentTag = document.getElementById(parentId)
    if (!parentTag) throw new Error(`Invalid parent tag id: ${parentId}`)
    return parentTag
  }

  createTodo(todo) {
    this.validateTodo(todo)
    const todoElement = document.createElement('li')
    todoElement.setAttribute('id', `todo-${todo.id}`)
    const todoText = this.createTodoText(todo)
    const deleteButton = this.createDeleteButton(todo)

    todoElement.appendChild(todoText)
    todoElement.appendChild(deleteButton)

    return todoElement
  }

  createTodoText(todo) {
    const { text, isCompleted } = todo
    const todoText = document.createElement('span')
    todoText.innerHTML = isCompleted ? `<s>${text}</s>` : text
    return todoText
  }

  createDeleteButton() {
    const button = document.createElement('button')
    button.innerHTML = '삭제'
    return button
  }

  addTodoEvents(context, eventHandlers) {
    const { toggleTodo, deleteTodo } = eventHandlers
    const parentTag = this.parentTag

    parentTag.addEventListener('click', function (event) {
      const { tagName } = event.target
      const todoId = +event
        .composedPath()
        .find((path) => path.tagName === 'LI')
        .id.split('-')[1]

      switch (tagName) {
        case 'S': {
          toggleTodo.call(context, todoId)
          break
        }
        case 'SPAN': {
          toggleTodo.call(context, todoId)
          break
        }
        case 'BUTTON': {
          deleteTodo.call(context, todoId)
          break
        }
        default: {
          break
        }
      }
    })
  }

  addTodo(text) {
    const todo = {
      id: this.todos.length,
      text,
      isCompleted: false,
    }

    this.todos.push(todo)
    this.render()
  }

  setState(todos) {
    this.todos = todos
    this.render()
  }

  removeAll() {
    this.parentTag.innerHTML = ''
  }
}
