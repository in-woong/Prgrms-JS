import storage from './storage.js'
import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'

const TODOS_STORAGE_KEY = 'todos'

export default function App({ $target }) {
  this.$target = $target

  this.state = storage.getItem(TODOS_STORAGE_KEY, [])

  const todoInput = new TodoInput({
    $target,
    onAddTodo: (text) => {
      this.setState([
        ...this.state,
        {
          text,
          isCompleted: false,
        },
      ])
    },
  })

  window.addEventListener('removeAll', () => {
    this.setState([])
  })

  const todoList = new TodoList({
    $target,
    initialState: this.state,
    onTodoClick: (index) => {
      const nextState = [...this.state]
      nextState[index].isCompleted = !nextState[index].isCompleted
      this.setState(nextState)
    },
    onTodoRemove: (index) => {
      const nextState = this.state.filter((_, i) => i !== index)

      this.setState(nextState)
    },
  })

  const todoCount = new TodoCount({
    $target,
    initialState: {
      totalCount: this.state.length,
      completedCount: this.state.filter((todo) => todo.isCompleted).length,
    },
  })

  this.setState = (nextState) => {
    // nextState에 대한 validation
    storage.setItem(TODOS_STORAGE_KEY, nextState)
    this.state = nextState

    todoList.setState(nextState)
    todoCount.setState({
      totalCount: this.state.length,
      completedCount: this.state.filter((todo) => todo.isCompleted).length,
    })
  }
}
