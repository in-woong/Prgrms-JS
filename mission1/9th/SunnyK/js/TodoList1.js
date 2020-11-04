import { useNewKeyword, isArrayState, checkTypes } from './Validation.js'

/**
 * TodoList1
 * @param {Array} data 
 * @param {String} targetId 
 */
export default function TodoList1(data, targetId) {

  this.validData = (state) => {
    useNewKeyword(this)
    isArrayState(state)
    checkTypes(
      state, 
      ({ text, isCompleted }) => 
        typeof text === 'string' && typeof isCompleted === 'boolean'
    )
  }

  this.setState = (nextData, targetId) => {
    this.validData(nextData)
    this.data = nextData
    if(targetId) this.$target = document.getElementById(targetId)
    this.render()
  }

  this.render = () => {
    const htmlString = this.data.map( todo => 
      (todo.isCompleted) ? `<div>${todo.text}</div>` : `<s><div>${todo.text}</div></s>`
    ).join('')

    this.$target.innerHTML = htmlString
  }

  this.setState(data, targetId)
}
 