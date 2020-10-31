export default class TodoList {
  constructor({ data, domId }) {
    checkTodoListData(data)
    this.data = data
    this.domId = domId
  }

  render() {
    const todoListDiv = document.querySelector(this.domId)
    const dataHtmlString = this.data
      .map((d) => {
        let className = 'todo'
        if (d.isCompleted) {
          className += ' completed-todo'
        }
        return `<div class="${className}" >${d.text}</div>`
      })
      .join('')
    todoListDiv.innerHTML = dataHtmlString
  }

  setState(nextData) {
    this.data = nextData
    this.render()
  }
}

const checkTodoListData = (data) => {
  if (!data) {
    throw new Error('data 가 존재하지 않습니다. ')
  }
  if (!Array.isArray(data)) {
    throw new Error('data 는 array 이어야 합니다. ')
  }
  const hasFaultData = data.some(
    (d) =>
      !d.text ||
      typeof d.text !== 'string' ||
      typeof d.isCompleted !== 'boolean'
  )
  if (hasFaultData) {
    throw new Error(
      'data 구조는 {text: string, isCompleted: boolean } 이어야 합니다.'
    )
  }
}
