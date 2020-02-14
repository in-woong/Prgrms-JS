class TodoList extends Component {
  constructor(data, $element) {
    super($element)
    this.validate(data, $element)
    this.data = data
    this.init()
  }

  init() {
    this.bindEvents()
    this.render(this.markup())
  }

  validate(data, $element) {
    validateData(data)
    validateElement($element)
  }

  bindEvents() {
    this.$element.addEventListener('click', event => this.onClick(event))
  }

  onClick(event) {
    if (event.target.className === 'remove-button') {
      console.log('클릭ㅋ:', event.target.className)
    }

    if (event.target.className === 'todo-title') {
      console.log('클릭ㅋ:', event.target.className)
    }

    if (event.target.className === 'deleted') {
      console.log('클릭ㅋ:', event.target.className)
    }
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

  markup() {
    return `<ul>${this.data
      .map(data =>
        data.isCompleted
          ? `<li class="todo-list-item"><span class="todo-title"><del class="deleted">${data.text}</del></span><button class="remove-button">삭제</button></li>`
          : `<li class="todo-list-item"><span class="todo-title">${data.text}</span><button class="remove-button">삭제</button></li>`
      )
      .join('')}</ul>`
  }
}
