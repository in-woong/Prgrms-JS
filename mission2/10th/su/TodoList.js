function TodoList(data, selector) {
  this.init = function () {
    this.validation()
    this.data = data
    this.element = document.querySelector(selector)
  }

  this.validation = function () {
    if (!data) throw new Error('data is error')
    if (!selector) throw new Error('id is error')
    if (!Array.isArray(data)) throw new Error('data is not Array')
    if (!(this instanceof TodoList)) throw new Error('Add new keyword')
  }

  this.render = function () {
    const liData = this.data
      .map(function (_data, index) {
        if (_data.isCompleted) {
          return `<li><s>${_data.text}</s><button data-id=${index}>삭제</button></li>`
        }
        return `<li>${_data.text} <button data-id=${index}>삭제</button></li>`
      })
      .join('')

    this.element.innerHTML = `<ul>${liData}</ul>`
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.render()
  }

  this.init()
  this.render()
}

export default TodoList
