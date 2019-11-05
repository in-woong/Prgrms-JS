function TodoCount(elementId) {
  if (this.constructor !== TodoCount) {
    throw new Error('TodoCount should be called by new keyword')
  }

  if (!elementId || typeof elementId !== 'string') {
    throw new Error('elementId is undefined or not string type')
  }

  const countAllTodo = (state) => state.length

  const countCompleteTodo = (state) => state.filter(todo => todo.isCompleted).length

  this.render = (nextData) => {
    document.getElementById(elementId).innerHTML = `
      <p>All: ${countAllTodo(nextData)} / Completed: ${countCompleteTodo(nextData)}</p>
    `
  }

  this.setState = (nextData) => {
    validateData(nextData)
    this.render(nextData)
  }
}
