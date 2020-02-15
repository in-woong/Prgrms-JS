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
  const todoListId = 'todo-list'
  const todoInputId = 'todo-input'

  this.todoList = null

  $app.innerHTML = `<h1 style="margin: 0;">${todoTitle}</h1>
  <div id="${todoListId}"></div>
  <input id="${todoInputId}" type="text" placeholder="새로운 Todo를 입력하세요." style="margin-top: 10"/>`

  const handleClickItem = item => {
    data[item].isCompleted = !data[item].isCompleted
    this.todoList.setState(data)
  }

  const handleDelete = item => {
    data.splice(item, 1)
    this.todoList.setState(data)
  }

  const handleInput = item => {
    const newItem = { text: item, isCompleted: false }
    data.push(newItem)
    this.todoList.setState(data)
  }

  // 질문용 코드입니다.
  /*
  const handleInput = function(item) {
    const newItem = { text: item, isCompleted: false }
    data.push(newItem)
    this.todoList.setState(data)
  }.bind(this)
  */

  this.render = function() {
    const $todoList = document.querySelector(`#${todoListId}`)
    const $todoInput = document.querySelector(`#${todoInputId}`)
    this.todoList = new TodoList($todoList, data, {
      onClickItem: handleClickItem,
      onDelete: handleDelete,
    })
    new TodoInput($todoInput, handleInput)
  }

  this.render()
}
