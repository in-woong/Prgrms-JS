function App () {
  this.data = [
    {
      text: 'JS 공부하기',
      isCompleted: true
    },
    {
      text: 'JS 복습하기',
      isCompleted: false
    }
  ]

  this.render = () => {
    this.todoList = new TodoList(document.querySelector('#todo-list'), this.data)
    this.todoCount = new TodoCount(document.querySelector('#todo-count'), this.data)
    this.todoInput = new TodoInput(document.querySelector('#todo-input'), this.data, this.todoList, this.todoCount)
  }

  this.render()
}

new App()
