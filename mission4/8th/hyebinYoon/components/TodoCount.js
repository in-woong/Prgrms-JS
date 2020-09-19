function TodoCount({ data, $target }) {
  if (!(this instanceof TodoCount))
    throw new Error('function 형태의 선언입니다.')

  this.todos = data

  // Todo Count
  const countTodo = () => {
    const total = this.todos.length
    const completed = this.todos.filter((todo) => todo.isCompleted == true)
      .length
    this.total = total
    this.completed = completed
  }

  this.setState = function (newData) {
    this.todos = newData
    countTodo()
    this.render()
  }

  this.render = function () {
    $target.innerHTML = `<p>
        <span>total : ${this.total}</span>
        <span>completed : ${this.completed}</span>
      </p>`
  }
  countTodo()
  this.render()
}

export default TodoCount
