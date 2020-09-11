function TodoCount({ data, $target, onCountTodo }) {
  // TOdo의 갯수, 완료처리 갯수
  if (!(this instanceof TodoCount))
    throw new Error('function 형태의 선언입니다.')

  this.todos = data

  this.calulateCount = function () {
    const count = onCountTodo()
    this.total = count.total
    this.completed = count.completed
  }

  this.setState = function () {
    this.calulateCount()
    this.render()
  }

  this.render = function () {
    const html = `<p>
      <span>total : ${this.total}</span>
      <span>completed : ${this.completed}</span>
    </p>`
    $target.insertAdjacentHTML('beforeend', html)
  }
  this.calulateCount()
  this.render()
}

export default TodoCount
