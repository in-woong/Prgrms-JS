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
      const { text } = elem
      if (typeof text !== 'string') {
        isValidData = false
        return
      }
    })
    return isValidData
  }

  addListToTag() {
    const todoHtml = this.todoList.map((list) => `<div>${list.text}</div>`)
    return todoHtml
  }

  render() {
    const todoContainer = document.getElementById('todo-list')

    todoContainer.innerHTML = this.addListToTag()
  }
}

export default TodoList
