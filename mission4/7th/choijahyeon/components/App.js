import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import TodoInput from './TodoInput.js'
import Users from './Users.js'
import api from '../service/api.js'

export let username = 'choijahyeon'
export default function App() {
  this.init = async () => {
    this.$target = document.querySelector('#app')
    this.$loading = document.querySelector('.loading')
    this.getTodos = async () => {
      try {
        this.$loading.style.visibility = 'initial'
        this.todos = await api.getTodos()
      } catch {
        document.body.innerHTML = `<p>[error] Failed to get Todos.</p>`
      } finally {
        this.$loading.style.visibility = 'hidden'
      }
    }
    await this.getTodos()
    try {
      this.usernames = await api.getUsernames()
    } catch {
      document.body.innerHTML = `<p>[error] Failed to get Users.</p>`
    }
    this.changeUser = async (name) => {
      username = name
      console.log('username : ', username)
      await this.getTodos()
      this.todoList.setState(this.todos)
      this.changeCount()
      this.users.render()
    }
    this.addTodo = async (text) => {
      await api.saveTodo(text)
      await this.getTodos()
      this.todoList.setState(this.todos)
      this.changeCount()
    }
    this.removeTodo = async (id) => {
      await api.removeTodo(id)
      await this.getTodos()
      this.todoList.setState(this.todos)
      this.changeCount()
    }
    this.toggleTodo = async (id, isCompleted) => {
      const isToggle =
        this.todos.filter((todo) => todo['_id'] === id)[0].isCompleted !==
        isCompleted
      if (isToggle) {
        await api.toggleTodo(id)
        await this.getTodos()
        this.todoList.setState(this.todos)
        this.changeCount()
      }
    }
    this.changeCount = () => {
      this.todoCount.setState({
        totalCount: this.todos.length,
        completeCount: this.todos.filter((todo) => todo.isCompleted).length,
      })
    }
    try {
      this.todoInput = new TodoInput({
        target: this.$target,
        addTodo: this.addTodo,
      })
      this.todoList = new TodoList({
        target: this.$target,
        removeTodo: this.removeTodo,
        toggleTodo: this.toggleTodo,
        todos: this.todos,
      })
      this.todoCount = new TodoCount({
        target: this.$target,
        totalCount: this.todos.length,
        completeCount: this.todos.filter((todo) => todo.isCompleted).length,
      })
      this.users = new Users({
        target: this.$target,
        usernames: this.usernames,
        changeUser: this.changeUser,
      })
    } catch (e) {
      document.body.innerHTML = `<p>${e.message}</p>`
    }
  }

  this.init()
}
