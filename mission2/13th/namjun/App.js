const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

function App() {
  const localStorage = new LocalStorage()
  const initialData =
    localStorage.getLocalStorageItem('todo-items') === null
      ? []
      : localStorage.getLocalStorageItem('todo-items')
  this.state = initialData

  this.setState = (nextState) => {
    this.state = nextState

    localStorage.setLocalStorage({ id: 'todo-items', todo: [...this.state] })
    todoList.setState(this.state)
    todoCount.setState(this.state)
  }

  const $target = document.querySelector('#root')
  const todoCount = new TodoCount($target, this.state)
  const todoInput = new TodoInput($target, (value) => {
    this.setState([...todoList.data, { text: value, isCompleted: false }])
  })
  const todoList = new TodoList($target, this.state, this.setState)

  window.addEventListener('remove-all-todo', (e) => {
    this.setState([])
  })
}
