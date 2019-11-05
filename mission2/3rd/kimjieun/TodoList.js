const COMPLETE_TODO_BUTTON = 'complete-button'
const DELETE_TODO_BUTTON = 'delete-button'

export default class TodoList {
  constructor({ $selector }) {
    this.$selector = $selector
    if (!this instanceof TodoList) throw new Error(error.NO_USED_NEW_KEYWORD)
    this.init()
  }

  init() {
    this.$selector.addEventListener('click', (e) => {
      if (e.target.className === COMPLETE_TODO_BUTTON) { this.toggleCompleteTodo(e.target.parentNode.dataset.idx) }
      if (e.target.className === DELETE_TODO_BUTTON) { this.onDeleteTodo(e.target.parentNode.dataset.idx) }
    })
  }

  createTodoHTMLString = ({ text, isCompleted }, index) => {
    const deleteButton = '<button class="delete-button">할일 삭제</button>'
    const completedButton = '<button class="complete-button">할일 완료</button>'
    return `<li data-idx=${index} >${isCompleted ? `<strike>${text}</strike>` : `${text}`} ${deleteButton} ${completedButton}</li>`
  }
  
  render = function(data) {
    const todoItemsHtmlString = data.map(this.createTodoHTMLString).join('')
    this.$selector.innerHTML = todoItemsHtmlString
  }
}
