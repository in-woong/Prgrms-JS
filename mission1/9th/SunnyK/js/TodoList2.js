import { useNewKeyword, isArrayState, checkTypes } from './Validation.js'

// class문법으로 작성
export default class TodoList2 {
  /**
   * @param {Array} data 
   * @param {String} targetId 
   */
  constructor(data, targetId) {
    this.setState(data, targetId)
  }

  validData(state) {
    isArrayState(state)
    checkTypes(
      state, 
      ({ text, isCompleted }) => 
        typeof text === 'string' && typeof isCompleted === 'boolean'
    )
  }

  setState(nextData, targetId) {
    this.validData(nextData)
    this.data = nextData
    if(targetId) this.targetId = targetId
    this.render()
  }

  render() {
    const htmlString = `<ul>${this.data.map(todo => 
      (todo.isCompleted) ? `<li>${todo.text}</li>` : `<li><s>${todo.text}</s></li>`
    ).join('')}</ul>`

    document.getElementById(this.targetId).innerHTML = htmlString
  }
}
