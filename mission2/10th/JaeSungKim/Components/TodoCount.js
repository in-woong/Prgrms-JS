function TodoCount($target, myTodoList) {
  if (!(this instanceof TodoCount)) {
    return new TodoCount($target)
  }

  this.render = () => {
    const countHTMLString = `완료된 작업 수: ${this.completeCount}`
    $target.innerHTML = countHTMLString
  }

  this.setState = (data) => {
    this.completeCount = data.filter((v) => v.isCompleted).length
    this.render()
  }

  this.setState(myTodoList)
}

export default TodoCount
