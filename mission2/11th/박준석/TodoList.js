import { $, ERROR_MSSAGE, isValueAvailable } from './utils.js'

export default class TodoList {
  constructor(initState, $target) {
    this.state = initState
    this.target = "#" + $target + "-list"
    if (this.state != null){
      this.check(this.state)
      this.render()
    }
    
  }

  check = (data) => {
    if (!Array.isArray(data)) throw new Error(ERROR_MSSAGE.DATA_IS_NOT_ARRAY)
    data.forEach((val) => {
      if (val.constructor !== Object) throw new Error(ERROR_MSSAGE.VALUE_IS_NOT_OBJECT)
      if (isValueAvailable(val.text)) throw new Error(ERROR_MSSAGE.TEXT_UNDEFINED)
    })
  }

  render() {
    $(this.target).innerHTML = this.state.map(({ text, isCompleted }) => `<li>${isCompleted ? `<s>${text}</s>` : text}</li>`).join('')
    $(this.target).innerHTML = `<h2>${this.target.toUpperCase()}</h2>` + $(this.target).innerHTML
  }

  setState = (newData) => {
    $(this.target).innerHTML = ''
    this.check(newData)
    this.state = newData
    this.render()
  }
}
