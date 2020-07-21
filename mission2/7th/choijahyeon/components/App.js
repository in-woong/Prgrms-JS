function App() {
  this.$target = document.querySelector('#app')
  try {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
    this.saveTodos = () => {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  } catch {
    document.body.innerHTML = `<p>[error] Failed to save 'todo' in localStorage.</p>`
  }
  this.addTodo = (text) => {
    this.todos.push({
      text: text,
      isCompleted: false,
    })
    this.todoList.setState(this.todos)
    this.changeCount()
    this.saveTodos()
  }
  this.deleteTodo = (index) => {
    this.todos.splice(index, 1)
    this.todoList.setState(this.todos)
    this.changeCount()
    this.saveTodos()
  }
  this.toggleTodo = (index) => {
    this.todos[index].isCompleted = !this.todos[index].isCompleted
    this.todoList.render()
    this.changeCount()
    this.saveTodos()
  }
  this.changeCount = () => {
    this.todoCount.setState({
      totalCount: this.todos.length,
      completeCount: this.todos.filter((todo) => todo.isCompleted).length,
    })
  }
  this.removeAll = () => {
    this.todos = []
    this.todoList.setState(this.todos)
    this.changeCount()
    this.saveTodos()
  }
  this.$target.addEventListener('remove-all', () => {
    this.removeAll()
  })
  try {
    this.todoInput = new TodoInput({
      target: this.$target,
      addTodo: this.addTodo,
    })
    this.todoList = new TodoList({
      target: this.$target,
      deleteTodo: this.deleteTodo,
      toggleTodo: this.toggleTodo,
      todos: this.todos,
    })
    this.todoCount = new TodoCount({
      target: this.$target,
      totalCount: this.todos.length,
      completeCount: this.todos.filter((todo) => todo.isCompleted).length,
    })
  } catch (e) {
    document.body.innerHTML = `<p>${e.message}</p>`
  }
}
