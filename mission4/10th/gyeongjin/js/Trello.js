import TodoList from './TodoList.js'

export default function Trello({ $target, initialState, onDelete, onToggle }) {
  const $listContainer = document.createElement('div')
  const $userName = document.createElement('h1')
  const $trelloZone = document.createElement('div')

  $target.append($listContainer)
  $listContainer.append($userName, $trelloZone)
  $listContainer.className = 'list-container'
  $trelloZone.className = 'trello-zone'

  this.state = initialState
  this.$target = $target
  this.onDelete = onDelete
  this.onToggle = onToggle
  this.$listContainer = $listContainer
  this.$trelloZone = $trelloZone

  const inCompletedTodo = new TodoList({
    $target: $trelloZone,
    initialState: {
      ...this.state,
      todos: this.state.todos.filter((todo) => !todo.isCompleted),
    },
    onDelete: this.onDelete,
    onToggle: this.onToggle,
    status: 'incompleted',
  })

  const completedTodo = new TodoList({
    $target: $trelloZone,
    initialState: {
      ...this.state,
      todos: this.state.todos.filter((todo) => todo.isCompleted),
    },
    onDelete: this.onDelete,
    onToggle: this.onToggle,
    status: 'completed',
  })

  this.$trelloZone.addEventListener('dragstart', (e) => {
    // console.log(e.target)
    e.dataTransfer.setData('text/plain', e.target.dataset.id)
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()

    inCompletedTodo.setState({
      isLoading: this.state.isLoading,
      todos: this.state.todos.filter((todo) => !todo.isCompleted),
      selectedName: this.state.selectedName,
    })

    completedTodo.setState({
      isLoading: this.state.isLoading,
      todos: this.state.todos.filter((todo) => todo.isCompleted),
      selectedName: this.state.selectedName,
    })
  }

  this.render = () => {
    $userName.innerText = `${this.state.selectedName}'s List`
  }
  this.render()
}
