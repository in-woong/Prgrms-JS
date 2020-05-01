let data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

let homeTodoData = [
  {
    text: '청소하기',
    isCompleted: true,
  },
  {
    text: '산책하기',
    isCompleted: false,
  },
]

let workTodoData = [
  {
    text: '이메일 정리하기',
    isCompleted: true,
  },
  {
    text: '세미나자료 작성하기',
    isCompleted: false,
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

function TodoList(data, elemID) {
  if (!(this instanceof arguments.callee))
    throw new Error('Function must be called with new')

  if (!isValidData(data)) throw new Error('Invalid data')

  this.todos = data
  this.elemID = elemID
  this.render = function () {
    const todosView = document.querySelector(`#${this.elemID}`)
    this.todos.forEach((todo) => {
      if (todo.isCompleted)
        todosView.innerHTML += `<div><s>${todo.text}</s></div>`
      else todosView.innerHTML += `<div>${todo.text}</div>`
    })
  }
}

const todoList = new TodoList(data, 'todo-list')
todoList.render()

const homeTodoList = new TodoList(homeTodoData, 'home-todo-list')
homeTodoList.render()

const workTodoList = new TodoList(workTodoData, 'work-todo-list')
workTodoList.render()
