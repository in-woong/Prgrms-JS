class TodoList {
  constructor(data, $list) {
    this.validate(data, $list)
    this.$list = $list
    this._data = data
    this.init()
  }

  // 첫 생성될 때 실행되어야할 함수들을 따로 init()에 모아서 호출합니다.
  init() {
    this.render()
  }

  validate(data, $list, $input) {
    validateData(data)
    validateElement($list)
  }

  addTodo(itemValue) {
    console.log(itemValue)
    const newTodo = { text: itemValue, isCompleted: false }
    this._data.push(newTodo)
    this.setState(this._data)
    this.$input.value = ''
  }

  setState(nextData) {
    validateData(nextData)
    this._data = nextData

    this.render()
  }

  removeButtonTemplate() {
    return `<button class="remove-button">삭제</button></li>`
  }

  render() {
    this.$list.innerHTML = `<ul>${this._data
      .map(data =>
        data.isCompleted
          ? `<li class="todo-list-item"><del>${data.text}</del><button class="remove-button">삭제</button></li>`
          : `<li class="todo-list-item">${data.text}<button class="remove-button">삭제</button></li>`
      )
      .join('')}</ul>`
  }
}
