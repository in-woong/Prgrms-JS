function App($target) {
  this.$target = $target
  this.data = getStorage()

  this.setState = function (nextData) {
    this.data = nextData
    setStorage(this.data)
    this.render()
  }

  const addTodo = (value) => {
    const update = [...this.data, { text: value, isCompleted: false }]
    this.setState(update)
  }

  const removeTodo = (index) => {
    const update = this.data.filter((todo, index) => index !== index)
    this.setState(update)
  }

  const updateComplete = (index) => {
    const update = [...this.data]
    update[index].isCompleted = !update[index].isCompleted
    this.setState(update)
  }

  document.addEventListener('removeTodoAll', () => {
    this.setState([])
  })

  const todoList = new TodoList(
    this.$target,
    this.data,
    removeTodo,
    updateComplete
  )
  const todoInput = new TodoInput(this.$target, addTodo)

  const todoCount = new TodoCount(this.$target, this.data)

  this.render = () => {
    todoList.render(this.data)
    todoCount.render(this.data)
  }
}
