//정적 버전

function App(selector, title) {
  if (!(this instanceof App)) {
    throw new Error('New 키워드 없이 실행했습니다')
  }

  checkSelector(selector)

  this.$target = document.querySelector(selector)

  //load Data
  const tempData = [
    {
      text: 'JS 복습하기',
      isCompleted: true,
    },
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 완성하기',
      isCompleted: false,
    },
  ]

  //Initialize
  this.initialize = function() {
    //load data
    this.data = tempData

    const todoInput = 'todo-input'
    const todoContainer = 'todo-container'
    const countContainer = 'count-container'
    const removeContainer = 'remove-container'
    this.$target.innerHTML = `<h1 class="title">${title}</h1><div class=${todoInput}></div><ul class=${todoContainer}></ul>
    <div class=${countContainer}></div><div class=${removeContainer}></div>`

    //todoInput
    this.myTodoInput = new TodoInput('.' + todoInput, handleInput)

    //todoList
    this.myTodoList = new TodoList('.' + todoContainer, this.data, {
      onDelete: handleDelete,
      onToggle: handleToggle,
    })

    //todoCount
    this.myTodoCount = new TodoCount('.' + countContainer, this.data)
  } //End initialize

  //setState
  this.setState = newData => {
    this.data = newData
    this.myTodoCount.setState(this.data)
    this.myTodoList.setState(this.data)
  }

  //function handleInput
  const handleInput = value => {
    const newData = [...this.data, { text: value, isCompleted: false }]
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

  this.initialize()
}
