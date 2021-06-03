class TodoStore {
  constructor() {
    this.state = []
  }

  setState(newState) {
    this.state = newState
  }

  getState() {
    return this.state
  }

  saveState() {
    localStorage.setItem('todoState', JSON.stringify(this.state))
  }

  loadState() {
    const loadedTodoItems = localStorage.getItem('todoState')
    const parsedTodoItems = JSON.parse(loadedTodoItems)
    this.state = parsedTodoItems || []
    return this.state
  }
}

export const todoStore = new TodoStore()
