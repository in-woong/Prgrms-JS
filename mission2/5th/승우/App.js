//App.js

function App(selector, title) {
  if (!(this instanceof App)) {
    throw new Error('New 키워드 없이 실행했습니다')
  }

  checkSelector(selector)
  this.$target = document.querySelector(selector)

  //localStorage
  this.myStorage = window.localStorage

  //Initialize
  this.initialize = function() {
    //load data

    this.loadData()

    const todoInputSelector = 'todo-input'
    const todoContainerSelector = 'todo-container'
    const countContainerSelector = 'count-container'
    const removeContainerSelector = 'remove-container'

    this.$target.innerHTML = `<h1 class="title">${title}</h1>
                              <div class=${todoInputSelector}></div>
                              <ul class=${todoContainerSelector}></ul>
                              <div class=${countContainerSelector}></div>
                              <div class=${removeContainerSelector}><button class="removeAllBtn">remove all</button></div>`

    //todoInput
    this.myTodoInput = new TodoInput(`.${todoInputSelector}`, handleInput)

    //todoList
    this.myTodoList = new TodoList(`.${todoContainerSelector}`, this.data, {
      onDelete: handleDelete,
      onToggle: handleToggle,
    })

    //todoCount
    this.myTodoCount = new TodoCount(`.${countContainerSelector}`, this.data)

    //removeAllBtn
    const removeAllBtn = document.querySelector('.removeAllBtn')

    //$target은 커스텀 "awesome" 이벤트를 리슨
    this.$target.addEventListener('removeAll', removeAllFnc)

    //사용자가 입력한대로, $target 내의 removeAllBtn은 이벤트를 디스패치/트리거하여 시작점으로 사용합니다.
    removeAllBtn.addEventListener('click', e =>
      e.target.dispatchEvent(removeAllEvent)
    )
  } //End initialize

  //setState
  this.setState = newData => {
    this.data = newData
    this.myTodoCount.setState(this.data)
    this.myTodoList.setState(this.data)
    this.storeData(this.data)
  }

  ///////Functions/////////

  //function handleInput
  const handleInput = value => {
    const newData = [...this.data, { text: value, isCompleted: false }]
    // this.data.push({ text: value, isCompleted: false })
    this.setState(newData)
  }

  //function handleDelete
  const handleDelete = index => {
    //Data Array에서 해당 item 제거
    this.data.splice(index, 1)
    this.setState(this.data)
  }

  //function handleToggleIsComplete
  const handleToggle = index => {
    //Data Array에서 해당 item isCompleted 토글
    this.data[index].isCompleted = !this.data[index].isCompleted
    this.setState(this.data)
  }

  //Remove All Event
  //엘리먼트는 아직 생성되지 않은 이벤트를 리슨할 수 있습니다.
  const removeAllEvent = new CustomEvent('removeAll', {
    bubbles: true,
  })

  //RemoveAll Function
  const removeAllFnc = e => {
    this.data.length = 0
    this.setState(this.data)
  }

  //Data Load Function
  this.loadData = () => {
    const todoData = JSON.parse(localStorage.getItem(STORAGE_DATA))

    if (todoData) {
      checkData(todoData)
      this.data = todoData
    } else {
      this.data = []
      localStorage.setItem(STORAGE_DATA, JSON.stringify(this.data))
    }
  }

  //Data Store Function
  this.storeData = newData => {
    localStorage.setItem(STORAGE_DATA, JSON.stringify(newData))
  }

  this.initialize()
}
