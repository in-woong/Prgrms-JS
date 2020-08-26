class App {
  TODOS_KEY = 'todos'

  constructor(appId, listId, countId, inputId) {
    this.todos = this.getTodos()
    this.todoApp = this.getTodoApp(appId)
    this.addRemoveAllEvent()
    this.todoList = new TodoList(listId)
    this.todoList.addTodoEvents(this, {
      toggleTodo: this.toggleTodo,
      deleteTodo: this.deleteTodo,
    })
    this.todoInput = new TodoInput(inputId, this, this.addTodo)
    this.todoCount = new TodoCount(countId)
    this.render()
  }

  getTodos() {
    const todos = window.localStorage.getItem(this.TODOS_KEY)
    if (!todos) {
      return []
    } else {
      return JSON.parse(todos)
    }
  }

  setTodos() {
    const todos = JSON.stringify(this.todos)
    window.localStorage.setItem(this.TODOS_KEY, todos)
  }

  getTodoApp(appId) {
    const todoApp = document.getElementById(appId)
    if (!todoApp) throw new Error(`Invalid todo app id: ${appId}`)
    return todoApp
  }

  addRemoveAllEvent() {
    this.todoApp.addEventListener(
      'removeAll',
      function () {
        this.removeAll()
        this.todoInput.resetInput()
      }.bind(this)
    )
  }

  validateTodos(todos) {
    if (todos === null) throw new Error(`Invalid todos type: null`)
    if (todos === undefined) throw new Error(`Invalid todos type: undefined`)
    if (!Array.isArray(todos)) throw new Error(`todos is not Array`)
  }

  renderTodos() {
    this.todoList.setState(this.todos)
  }

  renderCounter() {
    this.todoCount.setCount(this.todos)
  }

  toggleTodo(id) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      } else {
        return todo
      }
    })

    this.render()
  }

  deleteTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId)
    this.render()
  }

  addTodo(todoText) {
    const todo = {
      id: this.todos.length,
      text: todoText,
      isCompleted: false,
    }
    this.todos.push(todo)
    this.render()
  }

  removeAll() {
    this.todos = []
    this.render()
  }

  render() {
    this.setTodos()
    this.renderTodos()
    this.renderCounter()
  }
}
