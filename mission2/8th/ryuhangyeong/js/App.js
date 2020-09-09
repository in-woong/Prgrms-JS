class App {
  $target
  todos = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
  ]
  todoAllRemoveBtn = null
  todoInput = null
  todoList = null
  todoCount = null

  constructor($target) {
    this.$target = $target

    this.todoAllRemoveBtn = new TodoAllRemoveBtn({
      $target,
    })

    this.todoInput = new TodoInput({
      $target,
      onCreate: (text) => {
        this.todos.unshift({ text, isCompleted: false })
        this.setState(this.todos)
      },
    })

    this.todoList = new TodoList({
      $target,
      initialData: this.todos,
      onToggle: (idx) => {
        this.todos[idx].isCompleted = !this.todos[idx].isCompleted
        this.setState(this.todos)
      },
      onRemove: (idx) => {
        this.todos.splice(idx, 1)
        this.setState(this.todos)
      },
    })

    this.todoCount = new TodoCount({
      $target,
      initialData: this.todos,
    })

    this.eventListener()
  }

  eventListener() {
    this.todoAllRemoveBtn.$todoAllRemoveBtn.addEventListener(
      'removeAll',
      (e) => {
        this.todos = []
        this.setState(this.todos)
      }
    )
  }

  setState(nextData) {
    isValidTodos(nextData)
    this.todos = nextData
    this.todoList.setState(this.todos)
    this.todoCount.setState(this.todos)
  }
}
