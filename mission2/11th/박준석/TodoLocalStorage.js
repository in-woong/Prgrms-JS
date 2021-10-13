export default class TodoLocalStorage {
  constructor() {
    this.todoListState = []
  }

  setState(newState) {
    this.todoListState = newState
    this.saveState()
  }

  saveState() {
    localStorage.setItem('todoListState', JSON.stringify(this.todoListState))
  }

  loadState() {
    const loadedState = JSON.parse(localStorage.getItem('todoListState'))
    return loadedState
  }
}
