function TodoCount(data) {
  this.data = data

  this.init = function () {
    const $totalTodo = document.querySelector('#total-todo')
    const $completedTodo = document.querySelector('#completed-todo')

    let totalTodoCnt = data.length
    let completedTodoCnt = this.data.filter((item) => item.isCompleted).length

    $totalTodo.innerHTML = totalTodoCnt
    $completedTodo.innerHTML = completedTodoCnt
  }

  this.init()
}

export default TodoCount
