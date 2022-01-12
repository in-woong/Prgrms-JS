function App({ $target }) {
  this.state = storage.getItem('todos', [])

  this.setState = nextState => {
    this.state = nextState
    todoList.setState(this.state)
    todoCount.setState({
      totalNum: this.state.length,
      completedNum: this.state.filter(data => data.isCompleted).length,
    })
    storage.setItem('todos', this.state)
  }

  const todoInput = new TodoInput({
    $target,
    onAddTodo: text => {
      this.setState([...this.state, { text, isCompleted: false }])
    },
  })
  const todoList = new TodoList({
    $target,
    initialState: this.state,
    onTodoClick: idx => {
      const nextState = [...this.state]
      nextState[idx].isCompleted = !nextState[idx].isCompleted
      this.setState(nextState)
    },
    onRemove: idx => {
      const nextState = this.state.filter((data, i) => i !== idx)
      this.setState(nextState)
    },
  })
  const todoCount = new TodoCount({
    $target,
    initialState: {
      totalNum: this.state.length,
      completedNum: this.state.filter(data => data.isCompleted).length,
    },
  })

  // customEvent로 생성한 모두 삭제 기능
  window.addEventListener('remove-all-todos', () => {
    this.setState([])
  })
}
