import App from './App.js'

const app = new App()

const TodoListInputEle = document.querySelector('#input-todo-list')
const TodoListFormEle = document.querySelector('#todo-list-input-form')

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
  app.todoList.setState(todoListData)
  app.todoCount.setState(todoListData)
}

// todd list item들에 이벤트 등록
function setEvenOnTodoListItems() {
  // todo list 삭제 이벤트 등록
  document.querySelectorAll('.todo-list-remove-button').forEach((ele) => {
    ele.addEventListener('click', (event) => {
      removeTodoList(app, ele.closest('div').getAttribute('key'))
      setEvenOnTodoListItems()
    })
  })
  // todo list 클릭 이벤트 등록
  document.querySelectorAll('.todo-list-item').forEach((ele) => {
    ele.addEventListener('click', (event) => {
      setTodoListIsCompleted(app, ele.closest('div').getAttribute('key'))
      setEvenOnTodoListItems()
    })
  })
}
// todd list input form에 이벤트 등록
TodoListFormEle.addEventListener('submit', (event) => {
  event.preventDefault()
  addTodoList(app)
  setEvenOnTodoListItems()
})

setEvenOnTodoListItems()
