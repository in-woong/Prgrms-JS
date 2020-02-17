function TodoList(inputData, $target) {
  if (!(this instanceof TodoList)) {
    throw new Error('New 키워드 없이 함수를 실행하였습니다')
  }

  checkData(inputData)
  checkTarget($target)
  //   checkId(inputId)

  //   const $target = document.getElementById(inputId)
  this.data = inputData
  this.$target = $target
  this.render = function() {
    this.$target.innerHTML = this.data
      .map(el => {
        if (el.isCompleted) {
          return `<li class="finished"><span>${el.text}</span><i class="far fa-check-square"></i><i class="far fa-square "></i></li>`
        } else {
          return `<li><span>${el.text}</span><i class="far fa-check-square "></i><i class="far fa-square"></i></li>`
        }
      })
      .join('')
  }
  this.setState = function(nextData) {
    checkData(nextData)
    this.data = nextData
    this.render()
  }

  //객체가 생성되면 바로 render함수를 실행시킨다.
  this.render()

  // //Input Event
  // const todoInput = document.getElementById('input-todo')
  // todoInput.addEventListener('keydown', e => {
  //   if (e.keyCode === 13 && e.target.value !== '') {
  //     this.data.push({ text: e.target.value, isCompleted: false })
  //     this.setState(this.data)

  //     //편의성을 위해
  //     e.target.value = ''
  //     e.target.focus()
  //   }
  // })

  //List Click Event
  $target.addEventListener('click', e => {
    if (e.target && e.target.nodeName === 'I') {
      const list = e.target.parentNode
      const index = getIndex(list)
      list.classList.toggle('finished')
      this.data[index].isCompleted = !this.data[index].isCompleted
    }
  })

  //클릭된 list의 index를 가져온다
  getIndex = $target => {
    const parent = $target.parentNode
    const index = Array.prototype.indexOf.call(parent.children, $target)
    return index
  }
}

function TodoInput(selector, callback) {
  this.insertTodo = callback
  const $target = document.querySelector(`.${selector}`)
  this.input = document.createElement('input')
  this.input.setAttribute('type', 'text')
  this.input.addEventListener('keydown', e => {
    if (e.keyCode === 13 && e.target.value !== '') {
      this.insertTodo({ text: e.target.value, isCompleted: false })
      e.target.value = ''
      e.target.focus()
    }
  })
  $target.appendChild(this.input)
}

function App(id, appTitle) {
  //App이 실행되면 document에 기본적인 부분 렌더링
  const $container = document.createElement('div')
  $container.setAttribute('id', id)
  $container.innerHTML = `<h1 class="title">${appTitle}</h1><h2>What is your focus today?</h2><div class="insertInput"></div>
  <ul class="todo-list"></ul>`
  document.body.prepend($container)
  const tempData = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
  ]

  //함수 초기화
  this.initialize = () => {
    this.data = tempData
    this.todoInput = new TodoInput('insertInput', insertTodo)
    $todoCont = document.querySelector('.todo-list')
    this.todoList = new TodoList(this.data, $todoCont)
  }

  //질문정리 ::: 김유란님의 코드를 통해 App의 Data에 접근하는 함수를 참고했습니다.
  //이게 어떻게 되는지 잘 이해가 안되는데
  //이 insertTodo함수를 TodoInput을 선언할 때 매개변수로 넣어주고, input이벤트가 발생하면 이 함수가 실행되는데, TodoInput안의 insertTodo함수의
  //data가 정의되어 있지 않은데, 어떻게 this.data를 가리키고 data에 puhs에 할수 있는지 잘 모르겠습니다. 이게 클로저 때문인가요???
  const insertTodo = newInputData => {
    const data = this.data
    this.data.push(newInputData)
    // console.log(this.data)
    this.setState(this.data)
  }

  this.setState = newData => {
    checkData(newData)
    this.data = newData
    this.todoList.setState(newData)
  }

  this.initialize()
}
