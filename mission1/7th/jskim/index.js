const todoList = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
  {
    text: '8시간 잠자기',
    isCompleted: false,
  },
  {
    text: '10시까지 늦지않게 출근하기',
    isCompleted: true,
  },
  {
    text: '맛있는 점심메뉴 찾아 먹기',
    isCompleted: true,
  },
  {
    text: '칼퇴근하기',
    isCompleted: false,
  },
]
const playList = [
  {
    text: 'Warcraft 3 reforged',
    isCompleted: true,
  },
  {
    text: 'Warhammer 2 woodelf clear',
    isCompleted: true,
  },
  {
    text: 'Warhammer 2 dwarf clear',
    isCompleted: false,
  },
]
const travelList = [
  {
    text: '일본 여행',
    isCompleted: true,
  },
  {
    text: '유럽 여행',
    isCompleted: false,
  },
]
const unknownData = null

const dataGroup = [
  {
    info: todoList,
    elementId: 'todo-list',
  },
  {
    info: playList,
    elementId: 'play-list',
    reset: true,
  },
  {
    info: travelList,
    elementId: 'travel-list',
  },
  {
    info: todoList,
    elementId: 'travel-list',
  },
  {
    info: unknownData,
    elementId: 'todo-list',
  },
]

function TodoList(todos, elementId) {
  this.targetElement = ''
  this.todos = []

  this.init = (todos, elementId) => {
    this.todos = todos
    this.targetElement = document.getElementById(elementId)
  }

  this.validateData = (todos, elementId) => {
    if (!(this instanceof TodoList)) {
      throw new Error('Need to run it with a new operator.')
    }
    if (!todos || !elementId) {
      throw new Error('Invalid value.')
    }
    if (!document.getElementById(elementId)) {
      throw new Error('targetElement is not element.')
    }
    return true
  }

  this.render = () => {
    const todoLiElements = this.todos.map((todo) => {
      if (!todo || typeof todo.text !== 'string') {
        throw new Error('Type is not string.')
      }
      const liElement = document.createElement('li')
      liElement.className = 'todo-item'

      if (todo.isCompleted) {
        const sElement = document.createElement('s')
        sElement.innerHTML = todo.text
        liElement.appendChild(sElement)
      } else {
        liElement.innerHTML = todo.text
      }
      return liElement
    })
    const ulElement = document.createElement('ul')
    ulElement.className = 'todo-items'
    todoLiElements.forEach((element) => {
      ulElement.appendChild(element)
    })
    this.targetElement.innerHTML = ulElement.outerHTML
  }

  this.setState = (nextData) => {
    this.todos = nextData
    this.render()
  }

  try {
    if (this.validateData(todos, elementId)) {
      this.init(todos, elementId)
      this.render()
    }
  } catch (err) {
    console.log(err)
  }
}

const todoListInstacne = new TodoList(todoList, 'todo-list')
const playListInstacne = new TodoList(playList, 'play-list')
const travelListInstacne = new TodoList(travelList, 'travel-list')
// const travelListInstacne2 = TodoList(travelList, 'travel-list')
// const todoListInstacne2 = new TodoList(unknownData, 'todo-list')

playListInstacne.setState(travelList)
