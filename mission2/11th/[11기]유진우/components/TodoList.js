import validator from '../validators/todoValidator.js'
import todoItem from '../todoItem.js'

function TodoList({ $app, initialState, deleteTodo, toggleTodo, removeAllTodo }) {
  if (!new.target) throw new Error('new 키워드를 사용해야합니다.')
  validator(initialState)

  this.state = initialState
  this.$todoList = document.createElement('ul')
  this.$todoList.id = 'todo-list'

  this.$todoList.addEventListener('click', (e) => {
    const $todoItem = e.target.closest('li')

    if (e.target.className === 'todo-text' || e.target.tagName === 'S') {
      toggleTodo($todoItem.dataset.id)
    }

    if (e.target.className === 'todo-delete-btn') {
      deleteTodo($todoItem.dataset.id)
    }
  })

  $app.addEventListener('removeAll', () => {
    removeAllTodo()
  })
  $app.appendChild(this.$todoList)

  this.setState = (nextState) => {
    validator(nextState)
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$todoList.innerHTML = this.state.map((todo) => todoItem(todo)).join('')
  }
}

export default TodoList
