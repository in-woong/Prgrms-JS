const error = {
  NOT_DATA: "null 이거나 undefined 입니다.",
  INVALID_DATA: "데이터는 유효하지 않습니다.",
  NORARRAY_DATA: "타입은 Array가 아닙니다.",
  NO_USED_NEW_KEYWORD: "인스턴스가 아닙니다. new 키워드를 사용하여 생성해주세요.",
}

const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
  {
    text: 'JS 기초다지기',
    isCompleted: true,
  }
]

const hobbyList = [
  {
    text: 'Bike Riding',
    isCompleted: true,
  },
  {
    text: 'Cross-stitch',
    isCompleted: false,
  }
]

const weekendList = [
  {
    text: 'Coding',
    isCompleted: true,
  },
  {
    text: 'Reading',
    isCompleted: false,
  }
]

// 이곳에서 코딩을 시작하세요!
const checkValidData = (data) => {
  if (!Array.isArray(data)) throw new Error(error.NORARRAY_DATA)

  data.forEach(data => {
    if (!data.hasOwnProperty('text')) throw new Error(error.INVALID_DATA)
  })
}

function TodoList(selector) {
  this.selector = selector

  if (!this instanceof TodoList) throw new Error(erro.NO_USED_NEW_KEYWORD)

  const createTodoHTMLString = ({ text, isCompleted }) => {
    return `<li>${isCompleted ? `<strike>${text}</strike>` : `${text}`}</li>`
  }

  this.setState = (nextData) => {
    checkValidData(nextData)
    this.data = nextData
    this.render()
  }

  this.render = function() {
    const todoItemsHtmlString = this.data.map(createTodoHTMLString).join('')
    const $todoList = document.getElementById(this.selector)
    
    if (!$todoList.hasChildNodes()) $todoList.appendChild(document.createElement('ul'))

    const $ul = $todoList.querySelector('ul')
    // $ul.innerHTML = $ul.innerHTML + todoItemsHtmlString
    $ul.innerHTML = todoItemsHtmlString
  }
}

const todoList = new TodoList('todo-list')
todoList.setState(data)
setTimeout(() => {todoList.setState(hobbyList)}, 2000)
setTimeout(() => {todoList.setState(weekendList)}, 4000)
// const todoList1 = new TodoList('hobby-list')
// const todoList2 = new TodoList('weekend-list')
// todoList.setState(weekendList)