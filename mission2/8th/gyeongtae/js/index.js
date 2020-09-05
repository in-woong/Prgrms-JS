import TodoList from './TodoList.js'
import { data, data2, data3, data4, data5 } from './data.js'

const todolist = new TodoList('#todo-list', data)

const TodoListInputEle = document.querySelector('#input-todo-list')
const TodoListAddEle = document.querySelector('#add-todo-list-button')

// todoList 추가 함수
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

function removeTodoList(todoListComponent, key) {
  const todoListData = [...todoListComponent.data]
  todoListData.splice(key, 1)
  todoListComponent.setState([...todoListData])
}

// todd list item들에 이벤트 초기화
function setEvenOnTodoListItems() {
  document.querySelectorAll('.todo-list-remove-button').forEach((ele) => {
    ele.addEventListener('click', (event) => {
      removeTodoList(todolist, ele.closest('div').getAttribute('key'))
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
