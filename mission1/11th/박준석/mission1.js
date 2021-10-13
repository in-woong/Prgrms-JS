import { $, ERROR_MSSAGE, isValueAvailable } from './utils.js'

export function TodoList(data, id) {
  if (!(this instanceof TodoList)) throw new Error(ERROR_MSSAGE.IS_NOT_NEW)

  const $List = $(`${id}>ul`)
  this.state = data

  this.check = (data) => {
    if (!Array.isArray(data)) throw new Error(ERROR_MSSAGE.DATA_IS_NOT_ARRAY)
    data.forEach((val) => {
      if (val.constructor !== Object) throw new Error(ERROR_MSSAGE.VALUE_IS_NOT_OBJECT)
      if (isValueAvailable(val.text)) throw new Error(ERROR_MSSAGE.TEXT_UNDEFINED)
    })
  }

  this.render = () => {
    if ($List.innerHTML !== null) $List.innerHTML = ''
    $List.innerHTML = this.state.map(({ text, isCompleted }) => `<li>${isCompleted ? `<s>${text}</s>` : text}</li>`)
  }

  this.setState = (newData) => {
    $List.innerHTML = ''
    this.check(newData)
    this.state = newData
    this.render()
  }

  this.check(this.state)
  this.render()
}
