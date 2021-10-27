function App({ $target }){
  this.state = [
    {
      text: 'JS 공부하기',
      isCompleted: false
    },
    {
      text: 'JS 복습하기',
      isCompleted: false
    },
  ]

  this.setState = nextState => {
    this.state = nextState
    todoList.setState(this.state)
  }

  const todoInput = new TodoInput({
    $target,
    onAddTodo: (text) => {
      this.setState([
        ...this.state,
        {
          text,
          isCompleted: false
        }
      ])
    }
  })
  const todoList = new TodoList({ $target, initialState: this.state })
}