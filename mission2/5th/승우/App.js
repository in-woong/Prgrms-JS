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

    //todoCount
    this.myTodoCount = new TodoCount(this.data)

    //initialize state
    this.state = {
      data: this.data,
      counts: {
        total: this.myTodoCount.total,
        completed: this.myTodoCount.completed,
      },
    }

    //app을 하위 컴포넌트에 전달하여 하위 컴포넌트에서 접근이 가능하도록 만들었습니다.
    const app = this
    const todoInputSelector = 'todo-input'
    const todoContainerSelector = 'todo-container'
    this.$target.innerHTML = `<h1 class="title">${title}</h1><div class=${todoInputSelector}></div><ul class=${todoContainerSelector}></ul>`

    //todoInput
    this.myTodoInput = new TodoInput('.' + todoInputSelector, app, handleInput)

    //todoList
    this.myTodoList = new TodoList('.' + todoContainerSelector, this.state, {
      onDelete: handleDelete,
      onToggle: handleToggle,
    })
  } //End initialize

  //setState
  //질문 :::: 이부분 코드 리뷰 요청
  this.setState = newData => {
    this.state.data = newData

    //67~69번이 너무 복잡한거 같아서 쉬운 방식으로 리팩토링하기
    this.myTodoCount.setState(this.state.data)
    this.state.counts.total = this.myTodoCount.total
    this.state.counts.completed = this.myTodoCount.completed

    this.myTodoList.setState(this.state)
  }

  //function handleInput
  const handleInput = value => {
    const newData = [...this.state.data, { text: value, isCompleted: false }]
    this.setState(newData)
  }

  //function handleDelete
  const handleDelete = index => {
    //Data Array에서 해당 item 제거
    this.state.data.splice(index, 1)
    this.setState(this.state.data)
  }

  //function handleToggleIsComplete
  const handleToggle = index => {
    //Data Array에서 해당 item isCompleted 토글
    this.state.data[index].isCompleted = !this.state.data[index].isCompleted
    this.setState(this.state.data)
  }

  this.initialize()
}
