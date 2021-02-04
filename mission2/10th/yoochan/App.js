function App($app, initialState) {
    this.state = initialState
  
    this.todoInput = new TodoInput({
      $app,
      onTodoInput: (text) => {
        const nextState = [
          ...this.state,
          {
            text,
          },
        ]
  
        this.setState(nextState)
      },
    })
    this.todoList = new TodoList({
      $app,
      initialState: this.state,
      ontextClick: (index) => {
        const nextState = [...this.state]
        nextState[index] = {
          text: nextState[index].text,
          isCompleted: !nextState[index].isCompleted,
        }
  
        this.setState(nextState)
      },
      ondelClick: (index) => {
        const nextState = [...this.state]
        delete nextState[index]

        this.setState(nextState)
        console.log(this.state)
      },
    })
  
    this.todoCount = new TodoCount({
      $app,
      initialState: this.state,
    })
  
    this.setState = (nextState) => {
      this.state = nextState
      this.todoList.setState(this.state)
      this.todoCount.setState(this.state)
  
      localStorage.setItem('roto-todo', JSON.stringify(this.state))
    }
  }