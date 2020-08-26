import TodoList from './TodoList.js'
import TodoForm from './TodoForm.js'
import TodoCount from './TodoCount.js'
const LOCAL_STORAGE_ID = 'prgrms-fejs-todos'

;(function (data) {
  let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID)) || []

  document.addEventListener('DOMContentLoaded', () => {
    try {
      const $app = document.querySelector('.container')
      $app.addEventListener('removeAll', (e) => {
        todos = []
        setState(todos)
      })

      const todoList = new TodoList(
        '#todo-list',
        todos,
        handleRemoveTodo,
        handleCompleteTodo
      )
      const todoForm = new TodoForm('#todo-form', handleAddTodo)
      const todoCount = new TodoCount('#todo-count', todos.length)

      function handleAddTodo(todo) {
        const newTodos = { text: todo, isCompleted: false }
        todos = [...todos, newTodos]
        setState(todos)
      }

      function handleRemoveTodo(index) {
        todos = todos.filter((todo, _index) => `${_index}` !== index)
        setState(todos)
      }

      function handleCompleteTodo(index) {
        todos[index].isCompleted = !todos[index].isCompleted
        setState(todos)
      }

      function setState(todos) {
        localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(todos))
        todoList.setState(todos)
        todoCount.setState(todos.length)
      }

      todoForm.render()
      todoList.render()
      todoCount.render()
    } catch (error) {
      console.error(error)
      document.querySelector('#err-msg').innerHTML = error
    }
  })
})()
