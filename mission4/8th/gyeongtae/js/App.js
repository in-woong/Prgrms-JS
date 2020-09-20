import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import TodoRemoveAllButton from './TodoRemoveAllButton.js'
import todoListDataCheck from './utilForDataCheck.js'
import Users from './Users.js'
import {
  getTodoList,
  addTodoList,
  removeTodoList,
  removeAllTodoList,
  toggleTodoList,
} from './api.js'

export default function App(data, renderEle, userName, users) {
  // 만약 this가 window인경우 (생성자 함수에 new연산자를 붙이지 않은경우)
  // new 연산자를 붙이고 다시 생성자 함수를 실행한다
  if (!new.target) {
    throw new Error('이 함수는 생성자 함수입니다 new 연산자를 붙여주세요')
  }
  this.data = data
  this.renderEle = renderEle
  this.userName = userName
  this.users = users
  // TodoList data체크
  todoListDataCheck(this.data)

  // 데이터 초기화
  this.initData = async () => {
    this.data = await getTodoList(this.userName)
    this.setState(this.data)
  }
  // todo list 추가 함수
  this.addTodoList = async (event) => {
    const todoListInputEle = event.target.firstElementChild
    // input값이 없으면 return
    if (todoListInputEle.value.length === 0) {
      return alert('내용을 입력해주세요.')
    }
    const content = todoListInputEle.value
    await addTodoList(this.userName, content)

    const todoListItem = {
      content: content,
      isCompleted: false,
    }
    this.data.push(todoListItem)

    this.setState(this.data)
    // input값 초기화 및 input에 값 바로 입력할 수 있도록 함
    todoListInputEle.value = ''
    todoListInputEle.focus()
  }
  // todo list 삭제 함수
  this.removeTodoList = async (key) => {
    //(addTodoList를 호출하고 getTodoList를 호출할때 바로 추가된 데이터를 불러올 수 없어서 키값이 없을때마다 get)
    // todoList데이터의 id값이 없을때
    // 서버에있는 todoList데이터 id값을 가져온다
    if (!this.data[key]._id) {
      await this.initData()
      console.log(this.data)
    }
    await removeTodoList(this.userName, this.data[key]._id)
    this.data.splice(key, 1)
    this.setState(this.data)
  }
  // todo list 전체 삭제 함수
  this.removeAllTodoList = async () => {
    await removeAllTodoList(this.userName)
    this.data.length = 0
    this.setState(this.data)
  }
  // todo list IsCompleted값 설정 함수
  this.setTodoListIsCompleted = async (key) => {
    //(addTodoList를 호출하고 getTodoList를 호출할때 바로 추가된 데이터를 불러올 수 없어서 키값이 없을때마다 get)
    // todoList데이터의 id값이 없을때
    // 서버에있는 todoList데이터 id값을 가져온다
    if (!this.data[key]._id) {
      await this.initData()
    }
    await toggleTodoList(this.userName, this.data[key]._id)
    // 만약 todoList데이터 isCompleted값이
    //true면 false false면 true로 설정
    this.data[key].isCompleted = !this.data[key].isCompleted
    this.setState(this.data)
  }

  this.clickUser = async (userName) => {
    this.userName = userName
    await this.initData()
  }

  this.render = () => {
    // 처음 app컴포넌트를 객체화 했을때 하위 컴포넌트 객체를 생성하면서 자동적으로 render링이 되어
    // 처음 render함수가 호출될때는 하위 컴포넌트의 render함수를 호출 하지않음
    if (this.firstRender) {
      return (this.firstRender = false)
    }
    this.todoList.render()
    this.todoCount.render()
    this.todoInput.render()
    this.todoRemoveAll.render()
  }
  this.setState = (nextData) => {
    this.data = nextData
    this.todoList.setState(this.data, this.userName)
    this.todoCount.setState(this.data)
    this.todoInput.setState(this.data)
    this.todoRemoveAll.setState(this.data)
  }
  // 이벤트 등록
  this.setEventOnTodoList = () => {
    // todo list 전체 삭제 이벤트 등록
    this.renderEle.addEventListener('removeAll', (event) => {
      this.removeAllTodoList()
    })
  }

  this.users = new Users(this.renderEle, this.users, this.clickUser)
  this.todoList = new TodoList(
    this.renderEle,
    this.data,
    this.setTodoListIsCompleted,
    this.removeTodoList,
    this.userName
  )
  this.todoCount = new TodoCount(this.renderEle, this.data)
  this.todoInput = new TodoInput(this.renderEle, this.addTodoList)
  this.todoRemoveAll = new TodoRemoveAllButton(this.renderEle, () => {
    this.renderEle.dispatchEvent(new Event('removeAll'))
  })
  this.firstRender = true

  this.render()
  this.setEventOnTodoList()
}
