export default class TodoList {
  constructor(todos, onToggleComplete, onRemoveTodo) {
    this.todos = todos
    this.onToggleComplete = onToggleComplete
    this.onRemoveTodo = onRemoveTodo

    const todoListContainer = document.createElement('div')
    todoListContainer.className = 'todo-list-container'
    this.todoListContainer = todoListContainer
    this.bindEvent()
  }

  getElementsIndex = (targetId) => {
    const targetIdToNumber = parseInt(targetId)
    return this.todos.findIndex((todo) => {
      return todo.id === targetIdToNumber
    })
  }

  bindEvent = () => {
    this.todoListContainer.addEventListener('click', (event) => {
      const target = event.target
      if (target.className === 'todo-remove-button') {
        const index = this.getElementsIndex(target.parentElement.id)
        if (index > -1) {
          this.onRemoveTodo(index)
        }
      } else {
        let targetId = target.id
        if (target.className === 'todo-item-text') {
          targetId = target.parentElement.id
        } else if (target.tagName === 'S') {
          targetId = target.parentElement.parentElement.id
        }
        const index = this.getElementsIndex(targetId)
        event.preventDefault()
        if (index > -1) {
          this.onToggleComplete(index)
        }
      }
    })
  }

  createList(todo) {
    const liElement = document.createElement('li')
    const spanElement = document.createElement('span')
    const buttonElement = document.createElement('button')

    liElement.id = todo.id
    liElement.className = 'todo-item'
    spanElement.className = 'todo-item-text'
    buttonElement.className = 'todo-remove-button'
    buttonElement.type = 'button'

    if (todo.isCompleted) {
      const completedText = document.createElement('span')
      completedText.textContent = '(완료)'
      completedText.className = 'todo-completed'

      const sElement = document.createElement('s')
      sElement.textContent = todo.text
      spanElement.appendChild(sElement)
      spanElement.appendChild(completedText)
    } else {
      spanElement.textContent = todo.text
    }

    liElement.appendChild(spanElement)
    buttonElement.textContent = '삭제'
    liElement.appendChild(buttonElement)
    return liElement
  }

  render = (todos) => {
    const ulElement = document.createElement('ul')
    ulElement.className = 'todo-items'

    if (todos) {
      this.todos = todos
    }

    const todoLiElements = this.todos.map((todo) => {
      if (!todo || typeof todo.text !== 'string') {
        throw new Error('Type is not string.')
      }
      return this.createList(todo)
    })

    todoLiElements.forEach((element) => {
      ulElement.appendChild(element)
    })

    if (this.todoListContainer) {
      this.todoListContainer.innerHTML = ulElement.outerHTML
    }
  }
}
