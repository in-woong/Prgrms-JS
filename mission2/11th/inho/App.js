function App($app) {
  if (!new.target) {
    throw new Error(`"new" keyword is missing`)
  }

  const validateData = (data) => {
    if (data === null) {
      throw new Error('data is null')
    }

    if (data === undefined) {
      throw new Error('data is undefined')
    }

    if (!Array.isArray(data)) {
      throw new Error('data is not Array')
    }

    data.forEach((todo) => {
      if (todo.text === undefined) {
        throw new Error('text is undefined')
      }
      if (todo.isCompleted === undefined) {
        throw new Error('isCompleted is undefined')
      }
      if (todo.text === null) {
        throw new Error('text is null')
      }
      if (todo.isCompleted === null) {
        throw new Error('inCompleted is null')
      }

      if (typeof todo.text !== 'string') {
        throw new Error('text should be string')
      }

      if (typeof todo.isCompleted !== 'boolean') {
        throw new Error('isCompleted should be boolean')
      }
    })
  }

  const addTodo = (todoText) => {
    const todoItem = {
      text: todoText,
      isCompleted: false,
    }

    this.setState([...this.data, todoItem])
  }

  const deleteTodo = (index) => {
    const newList = this.data.filter((item, id) => id !== index)
    this.setState(newList)
  }

  const updateTodo = (index) => {
    const newList = [...this.data]
    newList[index].isCompleted = !newList[index].isCompleted
    this.setState(newList)
  }

  const loadLocalStorageTodo = () => {
    const storageData = window.localStorage.getItem('todolist')

    if (storageData) {
      const stringArray = storageData.split(',')
      const parsedData = stringArray.map((item) => {
        const arr = item.split('+')
        return { text: arr[0], isCompleted: arr[1] === 'true' ? true : false }
      })
      validateData(parsedData)
      this.setState(parsedData)
    }
  }

  const saveLocalStorageTodo = () => {
    const todolist = this.data.map((todo) => todo.text + '+' + todo.isCompleted).join(',')
    window.localStorage.setItem('todolist', todolist)
  }

  this.data = []
  this.$app = $app
  this.todoList = new TodoList($app, this.data, deleteTodo, updateTodo)
  this.todoInput = new TodoInput($app, addTodo)
  this.todoCount = new TodoCount($app, this.data.length, this.data.filter((todo) => todo.isCompleted).length)

  this.$app.addEventListener('removeAll', () => {
    this.setState([])
  })

  this.setState = (nextData) => {
    if (this.data !== nextData) {
      validateData(nextData)
      this.data = nextData
      this.todoList.setState(this.data)
      this.todoCount.setState(this.data.length, this.data.filter((todo) => todo.isCompleted).length)
      saveLocalStorageTodo()
      this.render()
    }
  }

  this.render = function () {
    this.todoList.render()
    this.todoCount.render()
    this.todoInput.render()
  }
  loadLocalStorageTodo()

  this.render()
}
