export default function TodoCount(data) {
  if (!(this instanceof TodoCount)) {
    throw new Error('new 연산자를 사용해주세요.')
  }

  this.$element = document.createElement('div')

  let todos = data

  this.render = () => {
    const completedTodos = todos.filter(({ isCompleted }) => isCompleted)
    this.$element.innerHTML = `총 ${todos.length} 할 일 목록중 ${completedTodos.length}개 완료했습니다.`
  }

  this.setState = (nextData) => {
    todos = nextData
    this.render()
  }
}
