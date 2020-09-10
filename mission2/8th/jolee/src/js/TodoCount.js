function TodoCount(data) {
  this.data = data

  this.init = function () {
    const $totalTodo = document.querySelector('#total-todo')
    const $completedTodo = document.querySelector('#completed-todo')

    let totalTodoCnt = data.length
    let completedTodoCnt = 0

    this.data.forEach(({ isCompleted }) => {
      isCompleted ? completedTodoCnt++ : completedTodoCnt
    })

    $totalTodo.innerHTML = totalTodoCnt
    $completedTodo.innerHTML = completedTodoCnt
  }

  this.init()
}

export default TodoCount
