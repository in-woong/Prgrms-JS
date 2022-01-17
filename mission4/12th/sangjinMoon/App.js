import storage from './localStorage.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import { getTodo, postTodo, deleteTodo, deleteAll, toggle } from './api.js'

export default function App({ $target }) {
  this.state = storage.getItem('todos', [])

  this.setState = async (nextState) => {
    this.state = await nextState
    todoList.setState(this.state)
    todoCount.setState({
      totalCount: this.state.length,
      completedCount: this.state.filter((todo) => todo.isCompleted).length,
    })

    storage.setItem('todos', this.state)
  }

  const todoInput = new TodoInput({
    $target,
    onAddTodo: async (text) => {
      await postTodo(text)
      this.setState(getTodo())
    },
  })

  const todoList = new TodoList({
    $target,
    initialState: this.state,
    onTodoClick: async (index) => {
      await toggle(index)
      this.setState(await getTodo())
    },
    onRemove: async (index) => {
      await deleteTodo(index)
      this.setState(await getTodo())
    },
  })

  const todoCount = new TodoCount({
    $target,
    initialState: {
      totalCount: this.state.length,
      completedCount: this.state.filter((todo) => todo.isCompleted).length,
    },
  })

  window.addEventListener('remove-all-todos', async () => {
    await deleteAll()
    this.setState(await getTodo())
  })

  this.setState(getTodo())
}
