import { createDom } from '../utils/utilFunctions.js'

class TodoCount {
  constructor(data) {
    this.data = data
    this.render()
  }

  countCompleteTodo(data) {
    const countInfo = this.data.reduce(
      (acc, { text, isCompleted }) => {
        if (isCompleted) {
          acc['completed']++
        }
        return acc
      },
      {
        length: this.data.length,
        completed: 0,
      }
    )
    return countInfo
  }

  render() {
    const {
      length,
      completed,
      uncompleted = length - completed,
    } = this.countCompleteTodo(this.data)

    this.$todoCountInfo = createDom('div', { id: 'todo-info-container' })

    this.$todoCountInfo.innerHTML = `<span>총갯수: ${length}</span> <span>완료: ${completed}</span> <span>미완료: ${uncompleted}</span>`
  }
}

export default TodoCount
