import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import TodoRemoveAll from './TodoRemoveAll.js'

// TodoList data배열 객체의 파라미터가 text, isCompleted가 있으면 true 없으면 false를 리턴
const isCorrectData = (value) => {
  typeof value.text === 'string' && typeof value.isCompleted === 'boolean'
}
// TodoList data체크 함수
function todoListDataCheck(data) {
  if (!data) {
    if (!typeof data === 'boolean') {
      throw new Error('데이터가 null이거나 undefined상태입니다')
    }
  }
  if (!Array.isArray(data)) {
    throw new Error('데이터가 array상태가 아닙니다')
  }
  // 배열의 요소중 하나라도 text, isCompleted프로퍼티중 하나가 없다면 false를 반환하여 error를 발생
  if (!data.length === 0) {
    if (!data.every(isCorrectData)) {
      throw new Error('데이터 내용이 이상합니다')
    }
  }
}

export default function App(data, renderEle) {
  // 만약 this가 window인경우 (생성자 함수에 new연산자를 붙이지 않은경우)
  // new 연산자를 붙이고 다시 생성자 함수를 실행한다
  if (!new.target) {
    throw new Error('이 함수는 생성자 함수입니다 new 연산자를 붙여주세요')
  }
  // data 초기화
  this.data = data

  this.renderEle = renderEle
  // TodoList data체크
  todoListDataCheck(this.data)

  this.todoList = new TodoList(this.renderEle, this.data)
  this.todoCount = new TodoCount(this.renderEle, this.data)
  this.todoInput = new TodoInput(this.renderEle)
  this.TodoRemoveAll = new TodoRemoveAll(this.renderEle)
  this.firstRender = true

  const TodoListInputEle = this.todoInput.todoInputEle.firstChild
    .nextElementSibling
  const localStorage = window.localStorage

  // todo list 추가 함수
  this.addTodoList = () => {
    // input값이 없으면 return
    if (TodoListInputEle.value.length === 0) {
      return alert('내용을 입력해주세요.')
    }
    const todoListItem = {
      text: TodoListInputEle.value,
      isCompleted: false,
    }
    this.data.push(todoListItem)
    todoListDataCheck(this.data)
    this.render()
    localStorage.setItem('todoList', JSON.stringify(this.data))
    // input값 초기화 및 input에 값 바로 입력할 수 있도록 함
    TodoListInputEle.value = ''
    TodoListInputEle.focus()
  }
  // todo list 삭제 함수
  this.removeTodoList = (key) => {
    this.data.splice(key, 1)
    this.render()
    localStorage.setItem('todoList', JSON.stringify(this.data))
  }
  // todo list 전체 삭제 함수
  this.removeAllTodoList = () => {
    localStorage.setItem('todoList', '[]')
    this.data.length = 0
    this.render()
  }
  // todo list IsCompleted값 설정 함수
  this.setTodoListIsCompleted = (key) => {
    // 만약 todoList데이터 isCompleted값이
    //true면 false false면 true로 설정
    this.data[key].isCompleted = !this.data[key].isCompleted
    this.render()
    localStorage.setItem('todoList', JSON.stringify(this.data))
  }

  this.render = () => {
    // 처음 app컴포넌트를 객체화 했을때 하위 컴포넌트 객체를 생성하면서 자동적으로 render링이 되어
    // 처음 render함수가 호출될때는 하위 컴포넌트의 render함수를 호출 하지않음
    if (this.firstRender) {
      return (this.firstRender = false)
    }
    this.todoList.render()
    this.todoCount.render()
  }
  this.render()

  // todd list에 이벤트 등록
  this.setEvenOnTodoList = () => {
    this.todoList.todoListEle.addEventListener('click', (event) => {
      const target = event.target
      // todo list 삭선처리 이벤트 등록
      if (target.className === 'todo-list-item') {
        return this.setTodoListIsCompleted(
          target.closest('div').getAttribute('key')
        )
      }
      // todo list 삭제 이벤트 등록
      if (target.className === 'todo-list-remove-button') {
        return this.removeTodoList(target.closest('div').getAttribute('key'))
      }
    })

    // todd list 추가 이벤트 등록
    this.todoInput.todoInputEle.addEventListener('submit', (event) => {
      event.preventDefault()
      this.addTodoList()
    })

    // todo list 전체 삭제 이벤트 등록
    this.renderEle.addEventListener('removeAll', (event) => {
      this.removeAllTodoList()
    })
    // removeAll Event를 커스텀으로 만들어
    // todo-remove-all-button을 클릭시 removeAll 이벤트를 todoListElement에 전달
    const removeAllEvent = new Event('removeAll')
    this.TodoRemoveAll.todoRemoveAllEle.firstChild.nextElementSibling.addEventListener(
      'click',
      (event) => {
        this.renderEle.dispatchEvent(removeAllEvent)
      }
    )
  }
  this.setEvenOnTodoList()
}
