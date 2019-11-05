function App(elementId) {
  let state = getStateFromStorage()
  let id = state.length

  let todoInput = null
  let todoList = null
  let todoCount = null

  const onToggle = (id) => {
    const updatedState = state.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })
    this.setState(updatedState)
  }

  const onAdd = (todoText) => {
    if (!todoText.length) {
      throw new Error('todo length is 0')
    }
    const newTodo = { id: id++, text: todoText, isCompleted: false }
    this.setState([...state, newTodo])
  }

  const onRemove = (id) => {
    const index = state.findIndex(todo => todo.id === id)
    state.splice(index, 1)
    this.setState(state)
  }

  const onRemoveAll = () => {
    this.setState([])
  }

  this.init = () => {
    const inputElemId = createRandomId('todo-input')
    const listElemId = createRandomId('todo-list')
    const countElemId = createRandomId('todo-count')

    document.getElementById(elementId).innerHTML = `
      <h2>TodoList</h2>
      <div id=${inputElemId}></div>
      <div id=${listElemId}></div>
      <div id=${countElemId}></div>
    `

    todoInput = new TodoInput(inputElemId, onAdd, onRemoveAll)

    todoList = new TodoList(listElemId, onToggle, onRemove)

    todoCount = new TodoCount(countElemId)

    todoInput.render()
    todoList.render(state)
    todoCount.render(state)
  }

  this.render = () => {
    state = getStateFromStorage()
    todoList.setState(state)
    todoCount.setState(state)
  }

  this.setState = (nextData) => {
    setStateAtStorage(nextData)
    this.render()
  }
}
