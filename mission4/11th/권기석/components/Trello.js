import TodoList from './TodoList.js'

export default function Trello({ $app, initialState, onRemove, onClick }) {
  this.state = initialState

  this.$trello = document.createElement('div')
  this.$trello.className = 'trello'
  $app.appendChild(this.$trello)

  const inCompletedList = new TodoList({
    $trello: this.$trello,
    initialState: {
      ...this.state,
      todos: this.state.todos.filter((todo) => !todo.isCompleted),
    },
    onRemove: onRemove,
    onClick: onClick,
  })

  const completedList = new TodoList({
    $trello: this.$trello,
    initialState: {
      ...this.state,
      todos: this.state.todos.filter((todo) => todo.isCompleted),
    },
    onRemove: onRemove,
    onClick: onClick,
  })

  this.$trello.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('id', e.target.dataset.id)
  })

  this.setState = (nextState) => {
    this.state = nextState
    inCompletedList.setState({ todos: this.state.todos.filter((todo) => !todo.isCompleted), isLoading: this.state.isLoading })
    completedList.setState({ todos: this.state.todos.filter((todo) => todo.isCompleted), isLoading: this.state.isLoading })
  }
}
