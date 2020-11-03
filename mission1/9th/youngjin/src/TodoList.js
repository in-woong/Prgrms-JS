export default class TodoList {
  constructor({ data, domId }) {
    checkTodoListData(data)
    this.data = data
    this.domId = domId
  }

  render() {
    const todoListDiv = document.querySelector(this.domId)
    const dataHtmlString = this.data
      .map((dataElement) => {
        const className = dataElement.isCompleted
          ? 'todo'
          : 'todo completed-todo'

        return `<div class="${className}" >${dataElement.text}</div>`
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
    (dataElement) =>
      typeof dataElement.text !== 'string' ||
      typeof dataElement.isCompleted !== 'boolean'
  )
  if (hasFaultData) {
    throw new Error(
      'data 구조는 {text: string, isCompleted: boolean } 이어야 합니다.'
    )
  }
}
