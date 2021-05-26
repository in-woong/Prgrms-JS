export default function TodoCount({ $app, initialState }) {

  // generate todoCount component
  const $todoCount = document.createElement('div')
  $todoCount.className = 'TodoCount'
  $app.appendChild($todoCount)
  
  this.state = initialState

  this.render = () => {
    const todoDoneCount = this.state.todoItems.filter((todo) => todo.isCompleted).length
    $todoCount.innerHTML = `Done: ${todoDoneCount} / Total: ${this.state.todoItems.length}`
  }
  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render()
}
