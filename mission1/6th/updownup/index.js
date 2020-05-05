var defaultTodo = [
  {
    text: 'JS 공부하기',
    isCompleted: true
  },
  {
    text: 'JS 복습하기',
    isCompleted: false
  }
]

var homeTodo = [
  {
    text: '강아지 산책',
    isCompleted: true
  },
  {
    text: '쓰레기 버리기',
    isCompleted: true
  }
]

var workTodo = [
  {
    text: 'spring framework aop 공부',
    isCompleted: true
  },
  {
    text: 'webpack 실습 마무리 하기',
    isCompleted: false
  }
]

function TodoList(data, id) {
  // 보너스 구현 사항 1
  if(!new.target) {
    throw new Error('new로 TodoList를 생성하지 않음!')
  }

  // 보너스 구현 사항 2
  this.checkParams = function (data) {
    if (!data) {
      throw new Error('data value is not available')
    }
    if (!Array.isArray(data)) {
      throw new Error('data type is not available')
    }
  }

  this.render = function () {
    this.data = this.checkParams(data)
    
    // 보너스 구현사항 - 다중 컴포넌트
    var tagId = 'todo-list'
    if (id === 'home') {
      tagId = 'home-todo-list'
    } else if (id === 'work') {
      tagId = 'work-todo-list'
    }

    // 보너스 구현사항 - isCompleted
    document.querySelector(`#${tagId}`).innerHTML = data
      .reduce(
        (sum, current) => `${sum.isCompleted ? '<s><p>' + sum.text + '</s></p>' : '<p>' + sum.text + '</p>' }
                            ${current.isCompleted ? '<s><p>' + current.text + '</s></p>' : '<p>' + current.text + '</p>' }` 
      )
    }
}

var todoList = new TodoList(defaultTodo, 'default')
todoList.render()

var todoList = new TodoList(homeTodo, 'home')
todoList.render()

var todoList = new TodoList(workTodo, 'work')
todoList.render()






