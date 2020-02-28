import { $ } from '../utils/'
import { SELECTOR, USER } from '../utils/constants.js'

function App() {
  this.init = () => {
    this.data = []
    this.todoList = new TodoList(this.data, $(SELECTOR.TODO_LIST), {
      onToggleTodo: this.onToggleTodo,
      onRemoveTodo: this.onRemoveTodo,
    })
    this.todoInput = new TodoInput($(SELECTOR.TODO_INPUT), {
      onAddTodo: this.onAddTodo,
    })
  }

  this.setState = newTodo => {
    this.data = [...this.data, newTodo]
    this.todoList.setState()
  }

  this.getAllTodos = async username => {
    const updateData = await fetchAllTodos(username)
    this.setState(updateData)
  }

  this.onAddTodo = async newTodo => {
    await postTodo(newTodo)
    this.getAllTodos(USER.NAME)
  }

  this.onRemoveTodo = async todoId => {
    await deleteTodo(todoId)
    this.getAllTodos(USER.NAME)
  }

  this.onToggleTodo = async todoId => {
    await updateTodo(todoId)
    this.getAllTodos(USER.NAME)
  }
}

export default App
