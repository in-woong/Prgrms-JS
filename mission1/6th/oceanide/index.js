let data = [
  {
    text: 'JS 공부하기',
  },
  {
    text: 'JS 복습하기',
  },
]

const getType = (value) => Object.prototype.toString.call(value).slice(8, -1)
const isNull = (value) => getType(value) === 'Null'
const isUndefined = (value) => getType(value) === 'Undefined'
const isString = (value) => getType(value) === 'String'
const isArray = (value) => getType(value) === 'Array'
const isObject = (value) => getType(value) === 'Object'

const isValidData = function (value) {
  if (isNull(value) || isUndefined(value)) return false
  if (!(isArray(value) && value.length > 0)) return false

  return value.every((element) => {
    return isObject(element) && 'text' in element && isString(element.text)
  })
}

function TodoList(data) {
  if (!(this instanceof arguments.callee))
    throw new Error('Function must be called with new')

  if (!isValidData(data)) throw new Error('Invalid data')

  this.todos = data
  this.render = function () {
    this.todos.forEach((todo) => {
      document.querySelector(
        '#todo-list'
      ).innerHTML += `<div>${todo.text}</div>`
    })
  }
}

const todoList = new TodoList(data)
todoList.render()
