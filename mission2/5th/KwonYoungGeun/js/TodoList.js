class TodoList extends Component {
  constructor($element) {
    super($element)
    this.data = fetchTodos()
    this.validate(this.data, this.$element)
    this.init()
  }

  init() {
    this.bindEvents()
    this.sendCount()
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
      const id = Number(event.target.parentNode.getAttribute('data-id'))
      this.removeTodo(id)
    }

    if (event.target.className === 'todo-title') {
      const id = Number(event.target.parentNode.getAttribute('data-id'))
      this.toggle(id)
    }

    if (event.target.className === 'deleted') {
      const id = Number(
        event.target.parentNode.parentNode.getAttribute('data-id') // TODO: parentNode 2번 흉측한데?
      )
      this.toggle(id)
    }
    this.sendCount()
  }

  addTodo(itemValue) {
    const newTodo = { id: makeID(), text: itemValue, isCompleted: false }

    this.data.push(newTodo)
    postTodo(this.data)
    this.setState(this.data)
    this.sendCount()
  }

  removeTodo(id) {
    const removedData = this.data.filter(todo => id !== todo.id)

    postTodo(removedData)
    this.setState(removedData)
  }

  removeAll() {
    postTodo([])
    this.setState([])
    this.sendCount()
  }

  toggle(id) {
    const toggledData = this.data.map(todo => {
      return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    })
    this.setState(toggledData)
  }

  sendCount() {
    this.emit('@setCount', {
      totalCount: this.data.length,
      completedCount: this.data.reduce((acc, todo) => {
        return acc + todo.isCompleted
      }, 0),
    })
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
          ? `<li class="todo-list-item" data-id="${data.id}"><span class="todo-title"><del class="deleted">${data.text}</del></span><button class="remove-button">삭제</button></li>`
          : `<li class="todo-list-item" data-id="${data.id}"><span class="todo-title">${data.text}</span><button class="remove-button">삭제</button></li>`
      )
      .join('')}</ul>`
  }
}
