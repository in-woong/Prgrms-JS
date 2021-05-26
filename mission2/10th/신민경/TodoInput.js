const TodoInput = function(){
  document.querySelector('#add').addEventListener('click', () => {
    this.state = [
      ...this.state,
      {
      text: document.querySelector('#inputTodo').value,
      isCompleted: false,
      },
    ]
    this.todoList.setState(this.state)
  })

  this.render = () => {}
}
