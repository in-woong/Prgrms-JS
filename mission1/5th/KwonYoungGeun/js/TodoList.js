class TodoList {
  constructor(data, element) {
    this.$element = element
    this._data = data
    this.init()
  }

  init() {
    validators.dataValidator(this._data)
    validators.elementValidator(this.$element)
    this.render()
  }

  setState(nextData) {
    validators.dataValidator(nextData)
    this._data = nextData

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
