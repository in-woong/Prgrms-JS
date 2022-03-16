import { validateTodo } from './validator.js'

export default function TodoList({
  $target,
  todoData,
  isCompleted,
  onToggleTodo,
  onRemoveTodo,
}) {
  this.$target = $target
  this.$todoList = document.createElement('div')
  this.isCompleted = isCompleted
  this.className = isCompleted ? 'completed' : 'list'

  this.todoData = todoData

  this.$target.append(this.$todoList)
  this.$todoList.classList.add('todo-list', this.className)

  this.setState = (nextData) => {
    validateTodo(nextData)
    this.todoData = nextData
    this.render()
  }

  const onClick = (e) => {
    const li = e.target.closest('li')
    if (li) {
      const id = li.dataset.id
      e.target.className === 'remove-button'
        ? onRemoveTodo(id)
        : onToggleTodo(id)
    }
  }

  const onDragStart = (e) => {
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.setData('dragId', e.target.dataset.id)
    e.dataTransfer.setData(
      'dragClass',
      e.target.closest('.todo-list').className
    )
  }
  const onDrop = (e) => {
    e.preventDefault()
    const dropElement = e.target.closest('.todo-list')
    if (!dropElement) {
      return
    }
    const dragId = e.dataTransfer.getData('dragId')
    const dragClass = e.dataTransfer.getData('dragClass')
    const dropClass = dropElement.className

    if (dragClass === dropClass) {
      return
    }
    onToggleTodo(dragId)
  }

  const onDragover = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  this.render = () => {
    if (!this.todoData.currentUser) {
      this.$todoList.innerHTML = ''
      return
    }
    const title = isCompleted
      ? '<h2>Completed Todo</h2>'
      : `<h1>${this.todoData.currentUser || ''}님의 Todo</h1>`

    const htmlString = this.todoData.todos
      .map(function (todo) {
        const contentHTML = todo.isCompleted
          ? `<strike>${todo.content}</strike>`
          : `${todo.content}`

        return `<li data-id="${todo._id}" class="todo-item" draggable="true">${contentHTML} <button class="remove-button">Remove</button></li>`
      })
      .join('')

    this.$todoList.innerHTML = `${title}<ul>${htmlString}</ul>`
  }

  this.$todoList.addEventListener('click', onClick)
  this.$todoList.addEventListener('dragstart', onDragStart)
  this.$todoList.addEventListener('dragover', onDragover)
  this.$todoList.addEventListener('drop', onDrop)

  this.render()
}
