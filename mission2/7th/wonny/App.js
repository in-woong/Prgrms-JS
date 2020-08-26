function App() {
  this.todos = getTodosFromLocalStorage()
  this.$app = document.querySelector('#App')

  this.addTodo = (todoText) => {
    const newTodos = this.todos.concat({
      id: Math.floor(Math.random() * 100000000).toString(),
      text: todoText,
      isCompleted: false,
    })
    this.render(newTodos)
  }

  this.removeTodo = (id) => {
    const newTodos = this.todos.filter((todo) => todo.id !== id)
    this.render(newTodos)
  }

  this.removeAllTodos = () => {
    this.render([])
  }

  this.toggleTodo = (id) => {
    const newTodos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      }
      return todo
    })
    this.render(newTodos)
  }

  this.setState = (newTodos) => {
    if (JSON.stringify(this.todos) !== JSON.stringify(newTodos)) {
      this.todos = newTodos
      setTodosToLocalStorage(newTodos)
      this.render()
    }
  }

  this.render = () => {
    this.todoList.setState(this.todos)
    this.todoCount.setState(this.todos)
  }

  this.$app.addEventListener('remove-all', () => {
    this.removeAllTodos()
  })

  try {
    this.todoList = new TodoList({
      elementId: 'todo-list',
      todos: this.todos,
      removeTodo: this.removeTodo,
      toggleTodo: this.toggleTodo,
    })
    this.todoInput = new TodoInput({
      elementId: 'todo-input',
      addTodo: this.addTodo,
      removeAllTodos: this.removeAllTodos,
    })
    this.todoCount = new TodoCount({
      elementId: 'todo-count',
      todos: this.todos,
    })
  } catch (error) {
    const $error = document.createElement('div')
    $error.innerHTML = error
    this.$app.innerHTML = ''
    this.$app.appendChild($error)
  }
}
