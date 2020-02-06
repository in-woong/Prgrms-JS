export default class TodoList {
  constructor({ $target, onToggleTodo, onRemoveTodo, onRemoveAllTodo }) {
    this.$target = $target
    this.listItems = []

    this.onToggleTodo = onToggleTodo
    this.onRemoveTodo = onRemoveTodo
    this.onRemoveAllTodo = onRemoveAllTodo

    this.$target.addEventListener('click', this.handleClick)
    this.$target.addEventListener('removeAll', this.onRemoveAllTodo)
  }

  render = () => {
    this.$target.innerHTML = this.listItems
      .map(({ content, isCompleted, _id }) =>
        isCompleted
          ? `<li data-id="${_id}"><del>${content}</del><button class="remove-button">제거</button></li>`
          : `<li data-id="${_id}"><span>${content}</span><button class="remove-button">제거</button></li>`
      )
      .join('')
  }

  handleClick = e => {
    const id = e.target.closest('li').dataset.id

    if (e.target.className === 'remove-button') {
      e.stopPropagation()
      this.onRemoveTodo(id)
    } else {
      this.onToggleTodo(id)
    }
  }

  setState = nextData => {
    if (!Array.isArray(nextData)) throw new Error('Data is not a Array')
    this.listItems = nextData
    this.render()
  }
}
