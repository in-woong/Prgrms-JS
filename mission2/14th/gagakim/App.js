function App($target, data) {

  this.$target = $target
  this.data = data

  this.todoInputComponent = new TodoInput(
    this.$target,
    (newTodoText) => {
      this.setState([...this.data, {text: newTodoText, isCompleted: false}])
    }
  )

  this.todoListComponent = new TodoList(
    this.$target,
    this.data,
    (itemIdx) => {
      const newData = [...this.data]
      newData[itemIdx].isCompleted = true
      this.setState(newData)
    }
  )

  this.setState = (newData) => {
    this.data = newData
    this.todoListComponent.setState(newData)
  }

  this.render = () => {
    this.todoInputComponent.render()
    this.todoListComponent.render()
  }

  this.render()
}
