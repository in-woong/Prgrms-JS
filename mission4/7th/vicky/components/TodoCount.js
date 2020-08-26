function TodoCount(elementDom) {
  if (!(this instanceof TodoCount)) {
    throw new Error('error: TodoCount must be called with new!')
  }

  this.render = () => {
    this.elementDom = elementDom.querySelector('.completedTotalNumber')
    const numberOfCompleted = this.todoList.filter((list) => list.isCompleted)
      .length
    this.elementDom.innerHTML = numberOfCompleted
  }

  this.setState = (todoList) => {
    this.todoList = todoList
    if (this.todoList.length) {
      this.render()
    }
  }
}

export default TodoCount
