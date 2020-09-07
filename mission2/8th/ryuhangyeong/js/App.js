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
  todoList = null

  constructor($target) {
    this.$target = $target

    new TodoInput({
      $target,
      onCreate: (text) => {
        this.todos.unshift({ text, isCompleted: false })
        this.todoList.setState(this.todos)
      },
    })

    this.todoList = new TodoList({
      $target,
      initialData: this.todos,
      onToggle: (idx) => {
        this.todos[idx].isCompleted = !this.todos[idx].isCompleted
        this.todoList.setState(this.todos)
      },
      onRemove: (idx) => {
        this.todos.splice(idx, 1)
        this.todoList.setState(this.todos)
      },
    })
  }
}
