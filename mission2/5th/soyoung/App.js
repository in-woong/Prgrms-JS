function App($target, data) {
  this.$target = $target
  this.data = data
  this.render = function() {
    this.$target.innerHTML = `
      <div>
        <div id="todo-input"></div>
        <div id="todo-list"></div>
      </div>
      `
    const $todoInput = document.querySelector('#todo-input')
    const $todolist = document.querySelector('#todo-list')

    const todoInput = new TodoInput($todoInput)
    const todoList = new TodoList($todolist, this.data)

    todoInput.getInput().addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        todoList.addItem(todoInput.getInputValue())
        todoInput.resetInputValue()
      }
    })
    todoInput.getAddBtn().addEventListener('click', () => {
      todoList.addItem(todoInput.getInputValue())
      todoInput.resetInputValue()
    })
  }

  this.render()
}
