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
      data => `<li>${data.text}</li>`
    )}</ul>`
  }
}
