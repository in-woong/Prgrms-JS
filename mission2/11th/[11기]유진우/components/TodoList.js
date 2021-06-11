import validator from '../validators/todoValidator.js'
import generateUniqueID from '../utils/generateUniqueID.js'
import todoItem from '../todoItem.js'

function TodoList($target, initialState) {
  if (!new.target) throw new Error('new 키워드를 사용해야합니다.')
  validator(initialState)

  this.state = initialState
  this.$target = $target
  this.$todoList = document.createElement('div')
  this.$todoList.id = 'todo-list'

  this.$target.appendChild(this.$todoList)

  this.addTodo = (todoText) => {
    const todo = { id: generateUniqueID(), text: todoText, isCompleted: false }
    const nextTodo = [...this.state, todo]
    this.setState(nextTodo)
  }

  this.deleteTodo = (todoID) => {
    const nextState = this.state.filter((todo) => todo.id !== todoID)
    this.setState(nextState)
  }

  this.toggleTodoIsCompleted = (todoID) => {
    const nextState = this.state.map((todo) => todo.id === todoID && { ...todo, isCompleted: !todo.isCompleted })
    this.setState(nextState)
  }

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
