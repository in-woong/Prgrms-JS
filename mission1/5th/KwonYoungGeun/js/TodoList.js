class TodoList {
  constructor(data, element) {
    this.$todoList = element
    this._data = data
    this.init()
  }

  init() {
    validation(this.$todoList, this._data)
    this.render()
  }

  render() {
    this.$todoList.innerHTML = `<ul>${this._data.map(
      data => `<li>${data.text}</li>`
    )}</ul>`
  }
}
