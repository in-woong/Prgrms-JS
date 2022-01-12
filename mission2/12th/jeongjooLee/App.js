function App ({$target}){

  this.setState = nextState => {
    this.state = nextState
    todoList.setState
  }

  const todoInput = new TodoInput({$target, onAddTodo: (text) => {this.setState()}});
}