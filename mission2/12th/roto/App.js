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
    todoCount.setState({
      totalCount: this.state.length,
      completedCount: this.state.filter(todo => todo.isCompleted).length
    })
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
  const todoList = new TodoList({
    $target,
    initialState: this.state,
    onTodoClick: (index) => {
      const nextState = [...this.state]
      nextState[index].isCompleted = !nextState[index].isCompleted
      this.setState(nextState)
    },
    onRemove: (index) => {
      const nextState = [...this.state]
      nextState.splice(index, 1)
      this.setState(nextState)
    }
  })
  const todoCount = new TodoCount({ $target, initialState: {
    totalCount: this.state.length,
    completedCount: this.state.filter(todo => todo.isCompleted).length
  }})
}