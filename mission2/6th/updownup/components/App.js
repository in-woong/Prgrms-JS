import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'

export default function App () {

  let data = []
  const $target = document.querySelector('#App')
  const inputElement = document.getElementById('todo-list-input')

  // todo 입력
  const addTodoList = (todoData) => {
    this.setState(todoData)
    inputElement.value = ''
    inputElement.focus()
  }

  // todo 삭제 혹은 완료 처리
  const updateTodoList = (todoData) => {
    data = todoData
    this.todoList.setState(data)
    this.TodoCount.setState(data)
  }

  this.setState = (nextData) => {
    data.push(nextData)
    this.todoList.setState(data)
    this.TodoCount.setState(data)
  }

  // TodoList 컴포넌트 생성
  this.todoList = new TodoList({
    $target: document.querySelector('#todo-list'),
    data,
    updateTodoList
  })

  // TodoInput 컴포넌트 생성
  this.todoInput = new TodoInput({
    addTodoList
  })

  // TodoCount 컴포넌트 생성
  this.TodoCount = new TodoCount({
    $target,
    data
  })
}
