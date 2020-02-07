class TodoList {
  constructor(data, element) {
    this.validate(data, element)
    this.$element = element
    this._data = data
    this.init()
  }

  // 첫 생성될 때 실행되어야할 함수들을 따로 init()에 모아서 호출합니다.
  init() {
    this.render()
  }

  validate(data, element) {
    dataValidator(data)
    elementValidator(element)
  }

  setState(nextData) {
    dataValidator(nextData)
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
