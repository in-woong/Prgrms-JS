import TodoList from './TodoList.js'
import { data, data2, data3, data4, data5 } from './data.js'

const todolist = new TodoList('#todo-list', data)

const TodoListInputEle = document.querySelector('#input-todo-list')
const TodoListAddEle = document.querySelector('#add-todo-list-button')

// todo list 추가 함수
function addTodoList(todoListComponent) {
  // input값이 없으면 return
  if (TodoListInputEle.value.length === 0) {
    return alert('내용을 입력해주세요.')
  }
  const todoListItem = {
    text: TodoListInputEle.value,
    isCompleted: false,
  }
  todoListComponent.setState([...todoListComponent.data, todoListItem])
  // input값 초기화 및 input에 값 바로 입력할 수 있도록 함
  TodoListInputEle.value = ''
  TodoListInputEle.focus()
}

// todo list 삭제 함수
function removeTodoList(todoListComponent, key) {
  const todoListData = [...todoListComponent.data]
  todoListData.splice(key, 1)
  todoListComponent.setState([...todoListData])
}

// todo list IsCompleted값 설정 함수
function setTodoListIsCompleted(todoListComponent, key) {
  const todoListData = [...todoListComponent.data]
  // 만약 todoList데이터 isCompleted값이
  //true면 false false면 true로 설정
  if (todoListData[key].isCompleted) {
    todoListData[key].isCompleted = false
  } else if (!todoListData[key].isCompleted) {
    todoListData[key].isCompleted = true
  }
  todoListComponent.setState([...todoListData])
}

// todd list item들에 이벤트 등록
function setEvenOnTodoListItems() {
  // todo list 삭제 이벤트 등록
  document.querySelectorAll('.todo-list-remove-button').forEach((ele) => {
    ele.addEventListener('click', (event) => {
      removeTodoList(todolist, ele.closest('div').getAttribute('key'))
      setEvenOnTodoListItems()
    })
  })
  // todo list 클릭 이벤트 등록
  document.querySelectorAll('.todo-list-item').forEach((ele) => {
    ele.addEventListener('click', (event) => {
      setTodoListIsCompleted(todolist, ele.closest('div').getAttribute('key'))
      setEvenOnTodoListItems()
    })
  })
}

TodoListAddEle.addEventListener('click', () => {
  addTodoList(todolist)
  setEvenOnTodoListItems()
})
TodoListInputEle.addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
    addTodoList(todolist)
    setEvenOnTodoListItems()
  }
})

setEvenOnTodoListItems()
