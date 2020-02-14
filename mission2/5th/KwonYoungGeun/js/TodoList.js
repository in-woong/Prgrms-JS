class TodoList extends Component {
  constructor(data, $element) {
    super($element)
    this.validate(data, $element)
    this.data = data
    this.init()
  }

  init() {
    this.render(this.markup())
  }

  validate(data, $element) {
    validateData(data)
    validateElement($element)
  }

  addTodo(itemValue) {
    const newTodo = { text: itemValue, isCompleted: false }
    this.data.push(newTodo)
    this.setState(this.data)
  }

  setState(nextData) {
    validateData(nextData)
    this.data = nextData
    this.render(this.markup())
  }

  removeButtonTemplate() {
    return `<button class="remove-button">삭제</button></li>`
  }

  markup() {
    return `<ul>${this.data
      .map(data =>
        data.isCompleted
          ? `<li class="todo-list-item"><del>${data.text}</del><button class="remove-button">삭제</button></li>`
          : `<li class="todo-list-item">${data.text}<button class="remove-button">삭제</button></li>`
      )
      .join('')}</ul>`
  }
}
