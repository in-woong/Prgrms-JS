import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import { fetchTodoList, postTodo } from '../api/index.js'

export default function App () {

  let data = fetchTodoList() || []
  const $target = document.querySelector('#App')
  const inputElement = document.querySelector('#todo-list-input')
  const removeAllElement = document.querySelector('#todo-remove-all')

  // 커스텀 이벤트 등록
  $target.addEventListener('removeAll', () => {
    const isRemoveAll = confirm('todo리스트를 전부 삭제 하시겠습니까?')
    if (isRemoveAll) {
      updateTodoList([])
    }
  })

  removeAllElement.addEventListener('click', (event) => {
    event.target.dispatchEvent(removeAllEvent)
  })

  const removeAllEvent = new CustomEvent('removeAll', {
    bubbles: true,
  });

  // todo 입력
  const addTodoList = (todoData) => {
    this.setState(todoData)
    inputElement.value = ''
    inputElement.focus()
  }

  // todo 삭제 혹은 완료 처리
  const updateTodoList = (todoData) => {
    data = todoData
    postTodo(data)
    this.todoList.setState(data)
    this.TodoCount.setState(data)
  }

  this.setState = (nextData) => {
    data.push(nextData)
    postTodo(data)
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
