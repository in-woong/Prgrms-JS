function App() {
  const data = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
  ]

  const $app = document.querySelector('#App')
  const todoTitle = 'JS 스터디 TODO'
  const todoCountId = 'todo-count'
  const todoListId = 'todo-list'
  const todoInputId = 'todo-input'

  this.todoCount = null
  this.todoList = null

  $app.innerHTML = `<h1 style="margin: 0;">${todoTitle}</h1>
  <div id="${todoCountId}" style="margin: 15;"></div>
  <div id="${todoListId}"></div>
  <input id="${todoInputId}" type="text" placeholder="새로운 Todo를 입력하세요." style="margin-top: 10"/>`

  const handleClickItem = item => {
    data[item].isCompleted = !data[item].isCompleted
    this.setState()
  }

  const handleDelete = item => {
    data.splice(item, 1)
    this.setState()
  }

  const handleInput = item => {
    const newItem = { text: item, isCompleted: false }
    data.push(newItem)
    this.setState()
  }

  // 질문용 코드입니다.
  /*
  const handleInput = function(item) {
    const newItem = { text: item, isCompleted: false }
    data.push(newItem)
    this.todoList.setState(data)
  }.bind(this)
  */

  this.setState = function() {
    this.todoCount.setState({
      totalCount: data.length,
      completedCount: data.filter(item => item.isCompleted).length,
    })
    this.todoList.setState(data)
  }

  this.render = function() {
    const $todoCount = document.querySelector(`#${todoCountId}`)
    const $todoList = document.querySelector(`#${todoListId}`)
    const $todoInput = document.querySelector(`#${todoInputId}`)

    this.todoCount = new TodoCount($todoCount, {
      totalCount: data.length,
      completedCount: data.filter(item => item.isCompleted).length,
    })

    this.todoList = new TodoList($todoList, data, {
      onClickItem: handleClickItem,
      onDelete: handleDelete,
    })

    new TodoInput($todoInput, handleInput)
  }

  this.render()
}
