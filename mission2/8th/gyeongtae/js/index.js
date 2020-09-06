import App from './App.js'

const app = new App()

const TodoListInputEle = document.querySelector('#input-todo-list')
const TodoListFormEle = document.querySelector('#todo-list-input-form')
const localStorage = window.localStorage

// todo list 추가 함수
function addTodoList(app) {
  // input값이 없으면 return
  if (TodoListInputEle.value.length === 0) {
    return alert('내용을 입력해주세요.')
  }
  const todoListItem = {
    text: TodoListInputEle.value,
    isCompleted: false,
  }
  const todoListData = [...app.todoList.data, todoListItem]
  localStorage.setItem('todoList', JSON.stringify(todoListData))
  app.todoList.setState(todoListData)
  app.todoCount.setState(todoListData)
  // input값 초기화 및 input에 값 바로 입력할 수 있도록 함
  TodoListInputEle.value = ''
  TodoListInputEle.focus()
}

// todo list 삭제 함수
function removeTodoList(app, key) {
  let todoListData = [...app.todoList.data]
  todoListData.splice(key, 1)
  todoListData = [...todoListData]
  localStorage.setItem('todoList', JSON.stringify(todoListData))
  app.todoList.setState(todoListData)
  app.todoCount.setState(todoListData)
}

// todo list 전체 삭제 함수
function removeAllTodoList(app) {
  let todoListData = []
  localStorage.setItem('todoList', '[]')
  app.todoList.setState(todoListData)
  app.todoCount.setState(todoListData)
}

// todo list IsCompleted값 설정 함수
function setTodoListIsCompleted(app, key) {
  let todoListData = [...app.todoList.data]
  // 만약 todoList데이터 isCompleted값이
  //true면 false false면 true로 설정
  if (todoListData[key].isCompleted) {
    todoListData[key].isCompleted = false
  } else if (!todoListData[key].isCompleted) {
    todoListData[key].isCompleted = true
  }
  todoListData = [...todoListData]
  localStorage.setItem('todoList', JSON.stringify(todoListData))
  app.todoList.setState(todoListData)
  app.todoCount.setState(todoListData)
}

// todd list에 이벤트 등록
function setEvenOnTodoList() {
  const todoListElement = document.querySelector('#todo-list')
  todoListElement.addEventListener('click', (event) => {
    const target = event.target
    // todo list 삭선처리 이벤트 등록
    if (target.className === 'todo-list-item') {
      return setTodoListIsCompleted(
        app,
        target.closest('div').getAttribute('key')
      )
    }
    // todo list 삭제 이벤트 등록
    if (target.className === 'todo-list-remove-button') {
      return removeTodoList(app, target.closest('div').getAttribute('key'))
    }
  })

  // todd list 추가 이벤트 등록
  TodoListFormEle.addEventListener('submit', (event) => {
    event.preventDefault()
    addTodoList(app)
  })

  // todo list 전체 삭제 이벤트 등록
  todoListElement.addEventListener('removeAll', (event) => {
    removeAllTodoList(app)
  })
  // removeAll Event를 커스텀으로 만들어
  // todo-remove-all-button을 클릭시 removeAll 이벤트를 todoListElement에 전달
  const removeAllEvent = new Event('removeAll')
  document
    .querySelector('#todo-remove-all-button')
    .addEventListener('click', (event) => {
      todoListElement.dispatchEvent(removeAllEvent)
    })
}
setEvenOnTodoList()
