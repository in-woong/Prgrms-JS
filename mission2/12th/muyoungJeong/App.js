function getTodoFromLocalstorage() {
  try {
    const todos = localStorage.getItem('todos')
    return JSON.parse(todos) || []
  } catch (error) {
    console.error(error)
    return []
  }
}

function App($root) {
  this.todos = []
  this.setTodosCallbacks = []
  this.$root = $root;
  this.todoList;
  this.todoInput;
  this.todoCount;

  this.init()
}

App.prototype.init = function() {
  this.todos = getTodoFromLocalstorage()

  const $todoListContainer = document.createElement("ul")
  const $todoCountContainer = document.createElement("div")
  const $todoInputContainer = document.createElement("span")
  const $removeAllButtonContainer = document.createElement("span")

  this.$root.appendChild($todoListContainer)
  this.$root.appendChild($todoCountContainer)
  this.$root.appendChild($todoInputContainer)
  this.$root.appendChild($removeAllButtonContainer)

  this.todoList = new TodoList(this.todos, $todoListContainer)
  this.todoCount = new TodoCount(this.todos, $todoCountContainer)
  this.todoInput = new TodoInput(this.addTodo.bind(this), $todoInputContainer)
  this.removeAllButton = new RemoveAllButton($removeAllButtonContainer)

  this.setTodosCallbacks.push(() => {
    this.todoList = new TodoList(this.todos, $todoListContainer)
  })

  this.setTodosCallbacks.push(() => {
    this.todoCount = new TodoCount(this.todos, $todoCountContainer)
  })

  window.addEventListener('removeAll', () => {
    this.setTodos([])
  })
}

App.prototype.setTodos = function(todos) {
  this.todos = todos
  localStorage.setItem('todos', JSON.stringify(this.todos))
  this.setTodosCallbacks.forEach(callback => typeof callback === "function" && callback())
}

App.prototype.addTodo = function(todo) {
  this.setTodos([
    ...this.todos,
    todo
  ])
}
