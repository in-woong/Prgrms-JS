import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import { $ } from '../utils/service.js'
import { SELECTOR, USER } from '../utils/constants.js'
import { fetchAllTodos, postTodo, deleteTodo, putTodo } from '../utils/api.js'

function App() {
  this.data = []

  this.initComponents = () => {
    this.todoList = new TodoList(this.data, $(SELECTOR.TODO_LIST), {
      onToggleTodo: this.onToggleTodo,
      onRemoveTodo: this.onRemoveTodo,
    })

    this.todoInput = new TodoInput($(SELECTOR.TODO_INPUT), {
      onAddTodo: this.onAddTodo,
    })
  }

  this.setState = updateData => {
    this.data = updateData
    this.todoList.setState(this.data)
  }

  this.getAllTodos = async () => {
    const updateData = await fetchAllTodos()
    this.setState(updateData)
  }

  this.onAddTodo = async newTodo => {
    await postTodo(newTodo)
    await this.getAllTodos(USER.NAME)
  }

  this.onRemoveTodo = async todoId => {
    await deleteTodo(todoId)
    await this.getAllTodos(USER.NAME)
  }

  this.onToggleTodo = async todoId => {
    await putTodo(todoId)
    await this.getAllTodos(USER.NAME)
  }

  this.initComponents()
  this.getAllTodos()
}

export default App
