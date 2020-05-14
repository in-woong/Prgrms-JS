function TodoInput ($target, data, todoList, todoCount) {
  this.data = data
  this.todoList = todoList
  this.todoCount = todoCount

  $target.addEventListener('keydown', e => {
    const ENTER_KEY_CODE = 13
    if (e.keyCode === ENTER_KEY_CODE) {
      const nextData = [
        ...this.data,
        {
          text: e.target.value,
          isCompleted: false
        }
      ]

      this.setState(nextData)
    }
  })

  this.setState = (nextData) => {
    this.data = nextData
    this.todoList.setState(nextData)
    this.todoCount.setState(nextData)
  }
}
