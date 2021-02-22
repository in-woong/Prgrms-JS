export default function TodoList({ $target, initialState, onDelete, onToggle, status }) {
  const $trelloZoneEach = document.createElement('div')
  const $listTitle = document.createElement('h2')
  const $todoList = document.createElement('ul')

  $target.append($trelloZoneEach)
  $trelloZoneEach.append($listTitle, $todoList)
  $todoList.className = 'todo-list'
  $trelloZoneEach.classList = 'trello-zone-each'

  this.state = initialState
  this.status = status
  this.$trelloZoneEach = $trelloZoneEach
  this.$todoList = $todoList
  this.$listTitle = $listTitle
  this.onToggle = onToggle

  this.listTitleString = () => {
    if (this.status === 'incompleted') {
      this.$todoList.classList += ' incompleted'
      return '해야할 일 ➰'
    } else {
      this.$todoList.classList += ' completed'
      return '완료된 일 〰️'
    }
  }

  $listTitle.textContent = this.listTitleString()

  this.$todoList.addEventListener('click', (e) => {
    const todoId = e.target.closest('li').dataset.id

    if (e.target.className === 'delete-button') {
      onDelete(todoId)
    } else if (e.target.className === 'todo-checkbox') {
      onToggle(todoId)
    }
  })

  this.$todoList.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  })

  this.$todoList.addEventListener('drop', (e) => {
    e.preventDefault()
    const draggedTodoID = e.dataTransfer.getData('text/plain')
    const draggedTodoParent = document.querySelector(`li[data-id="${draggedTodoID}"]`).parentNode
    if (this.$todoList !== draggedTodoParent) {
      this.onToggle(draggedTodoID)
    }
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { todos } = this.state
    const htmlItems = todos
      .map((todoItem) => {
        const htmlIsCompletedTag = todoItem.isCompleted ? `<s>${todoItem.content}</s>` : `${todoItem.content}`

        return `
        <li 
          data-id="${todoItem._id}" 
          class="todo-item"
          draggable="true"
        >
          <input 
            type="checkbox"
            class="todo-checkbox"
            id = "${todoItem._id}"
            ${todoItem.isCompleted ? 'checked' : ''} 
          />
          <label for="${todoItem._id}">${htmlIsCompletedTag}</label>
          <button class="delete-button">x</button>
        </li>
        `
      })
      .join('')

    this.$todoList.innerHTML = htmlItems
  }

  this.render()
}
