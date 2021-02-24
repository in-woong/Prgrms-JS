export default function TodoCount({ $todoList, todos }) {
  this.todos = todos

  const $target = document.createElement('div')
  $target.className = 'TodoCount'
  $todoList.appendChild($target)

  this.$target = $target

  this.render = () => {
    const totalCount = this.todos.length
    const completedCount = this.todos.filter((todo) => todo.isCompleted).length
    this.$target.innerHTML = `Total: ${totalCount}  Completed: ${completedCount}`
  }

  this.setState = (nextState) => {
    this.todos = nextState
    this.render()
  }

  this.render()
}
