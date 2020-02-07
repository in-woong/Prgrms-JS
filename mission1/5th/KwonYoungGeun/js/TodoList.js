class TodoList {
  constructor(data, element) {
    this.$element = element
    this._data = data
    this.init()
  }

  init() {
    validation(this.$element, this._data)
    this.render()
  }

  render() {
    this.$element.innerHTML = `<ul>${this._data.map(
      data =>
        `${
          data.isCompleted
            ? `<li><strike>${data.text}</strike></li>`
            : `<li>${data.text}</li>`
        }`
    )}</ul>`
  }
}
