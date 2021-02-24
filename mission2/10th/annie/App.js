function App($app, initialState) {
  this.state = initialState

  this.todoInput = new TodoInput({
    $app,
    onAddTodo: (text) => {
      const nextState = [
        ...this.state,
        {
          text,
          isCompleted: false,
        },
      ]

      this.setState(nextState)
    },
  })
  this.todoList = new TodoList({
    $app,
    todos: this.state,
    onClick: (index) => {
      const nextState = [...this.state]

      nextState[index] = {
        text: nextState[index].text,
        isCompleted: !nextState[index].isCompleted,
      }
      this.state = nextState
      this.setState(nextState)
    },
  })
  this.todoCount = new TodoCount({
    $app,
    todos: this.state,
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.todoList.setState(this.state)
    this.todoCount.setState(this.state)
  }
}
