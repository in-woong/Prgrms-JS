class TodoCount {
  constructor({ $parent, todoItems }) {
    this.$target = document.createElement('div')
    this.$target.setAttribute('data-component-type', 'TodoCount')

    this.todoItems = todoItems

    this.render()
    $parent.appendChild(this.$target)
  }

  setState(nextTodoItems) {
    this.todoItems = nextTodoItems
    this.render()
  }

  render() {
    const totalCount = this.todoItems.length
    const completedCount = this.todoItems.filter(({ isCompleted }) => isCompleted).length

    this.$target.innerHTML = `
      <span>완료한 일: ${completedCount} / ${totalCount}</span>
    `
  }
}

export default TodoCount
