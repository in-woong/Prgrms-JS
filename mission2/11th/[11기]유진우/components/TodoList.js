import validator from '../validators/todoValidator.js'

function TodoList($target, initialState) {
  if (!new.target) throw new Error('new 키워드를 사용해야합니다.')
  validator(initialState)

  this.state = initialState
  this.$target = $target
  this.$todoList = document.createElement('div')
  this.$todoList.id = 'todo-list'

  this.$target.appendChild(this.$todoList)

  this.addTodo = (todoText) => {
    const todo = { text: todoText, isCompleted: false }
    const nextTodo = [...this.state, todo]
    this.setState(nextTodo)
  }

  this.setState = (nextState) => {
    validator(nextState)
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$todoList.innerHTML = this.state
      .map(({ text, isCompleted }) => {
        return isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
      })
      .join('')
  }
}

export default TodoList
