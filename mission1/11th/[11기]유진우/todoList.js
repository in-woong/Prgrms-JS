import validator from './todoValidator.js'

function TodoList($target, initialState) {
  if (!new.target) throw new Error('new 키워드를 사용해야합니다.')
  validator(initialState)

  this.state = initialState
  this.$target = $target

  this.setState = function (nextState) {
    validator(nextState)
    this.state = nextState
    this.render()
  }

  this.render = function () {
    this.$target.innerHTML = this.state
      .map(({ text, isCompleted }) => {
        return isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
      })
      .join('')
  }
}

export default TodoList
