import { useNewKeyword, isArrayState, checkTypes } from './Validation.js'

/**
 * TodoList 컴포넌트
 * @param {Array} data 
 * @param {String} targetId 
 */
export default function TodoList1(data, targetId) {

  this.validData = (data) => {
    useNewKeyword(this)
    isArrayState(data)
    checkTypes(
      data, 
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
    const htmlString = this.data.map(({ text, isCompleted }) => 
      (isCompleted) ? `<li>${text}</li>` : `<li><s>${text}</s></li>`
    ).join('')

    this.$target.innerHTML = `<ul>${htmlString}</ul>`
  }

  this.setState(data, targetId)
}
 