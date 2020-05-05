class TodoList {
  constructor(data) {
    this.checkData(data)
    this.todoList = data
  }

  checkData(data) {
    if (!data) {
      throw new Error('Invalid Data')
    } else if (!Array.isArray(data)) {
      throw new Error('Data must be Array')
    } else if (!this.checkDataElem(data)) {
      throw new Error('Data Element has Error')
    }
  }

  checkDataElem(data) {
    let isValidData = true
    data.forEach((elem) => {
      const { text, isCompleted } = elem
      if (
        typeof text !== 'string' ||
        isCompleted === undefined ||
        typeof isCompleted !== 'boolean'
      ) {
        isValidData = false
        return
      }
    })
    return isValidData
  }

  addListToTag() {
    const todoHtml = this.todoList.map((list) => {
      const { text, isCompleted } = list
      let tagStr = text

      if (isCompleted === true) {
        tagStr = `<del>${tagStr}</del>`
      }

      return `<div>${tagStr}</div>`
    })
    return todoHtml.join('')
  }

  render(container) {
    this.container = container
    container.innerHTML = this.addListToTag()
  }

  setState(nextData) {
    this.todoList = nextData
    this.checkData(this.todoList)
    this.render(this.container)
  }
}

export default TodoList
