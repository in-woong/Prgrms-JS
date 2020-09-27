import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import TodoRemoveAllButton from './TodoRemoveAllButton.js'
import todoListDataCheck from './utilForDataCheck.js'
import Users from './Users.js'
import User from './User.js'
import {
  getTodoList,
  addTodoList,
  removeTodoList,
  removeAllTodoList,
  toggleTodoList,
} from './api.js'

export default function App(data, renderEle) {
  // 만약 this가 window인경우 (생성자 함수에 new연산자를 붙이지 않은경우)
  // new 연산자를 붙이고 다시 생성자 함수를 실행한다
  if (!new.target) {
    throw new Error('이 함수는 생성자 함수입니다 new 연산자를 붙여주세요')
  }
  this.data = data
  this.renderEle = renderEle
  // TodoList data체크
  todoListDataCheck(this.data.todoList)
  // 데이터 초기화
  this.initTodoListData = async () => {
    this.setState({
      ...this.data,
      todoList: await getTodoList(this.data.userName),
    })
  }
  // todo list 추가 함수
  this.addTodoList = async (content) => {
    addTodoList(this.data.userName, content)
    const todoListItem = {
      content: content,
      isCompleted: false,
    }
    this.data.todoList.push(todoListItem)
    this.setState(this.data)
  }
  // todo list 삭제 함수
  this.removeTodoList = async (key) => {
    //(addTodoList를 호출하고 getTodoList를 호출할때 바로 추가된 데이터를 불러올 수 없어서 키값이 없을때마다 get)
    // todoList데이터의 id값이 없을때
    // 서버에있는 todoList데이터 id값을 가져온다
    if (!this.data.todoList[key]._id) {
      await this.initTodoListData()
    }
    await removeTodoList(this.data.userName, this.data.todoList[key]._id)
    this.data.todoList.splice(key, 1)
    this.setState(this.data)
  }
  // todo list 전체 삭제 함수
  this.removeAllTodoList = async () => {
    await removeAllTodoList(this.data.userName)
    this.data.todoList = []
    this.setState(this.data)
  }
  // todo list IsCompleted값 설정 함수
  this.setTodoListIsCompleted = async (key) => {
    //(addTodoList를 호출하고 getTodoList를 호출할때 바로 추가된 데이터를 불러올 수 없어서 키값이 없을때마다 get)
    // todoList데이터의 id값이 없을때
    // 서버에있는 todoList데이터 id값을 가져온다
    if (!this.data.todoList[key]._id) {
      await this.initTodoListData()
    }
    await toggleTodoList(this.data.userName, this.data.todoList[key]._id)
    // 만약 todoList데이터 isCompleted값이
    //true면 false false면 true로 설정
    this.data.todoList[key].isCompleted = !this.data.todoList[key].isCompleted
    this.setState(this.data)
  }

  this.clickUser = async (userName) => {
    this.data.userName = userName
    await this.initTodoListData()
  }

  this.render = () => {
    // 처음 app컴포넌트를 객체화 했을때 하위 컴포넌트 객체를 생성하면서 자동적으로 render링이 되어
    // 처음 render함수가 호출될때는 하위 컴포넌트의 render함수를 호출 하지않음
    if (this.firstRender) {
      return (this.firstRender = false)
    }
    for (let component in this.components) {
      console.log(component)
      this.components[component].render()
    }
  }
  this.setState = (nextData) => {
    this.data = nextData
    this.components.usersComponent.setState(this.data.users)
    this.components.userComponent.setState(this.data.userName)
    this.components.unCompletedtodoListComponent.setState(this.data.todoList)
    this.components.completedTodoListComponent.setState(this.data.todoList)
    this.components.todoCountComponent.setState(this.data.todoList)
    this.components.todoInputComponent.setState()
    this.components.todoRemoveAllButtonComponent.setState()
  }
  // 이벤트 등록
  this.setEventOnTodoList = () => {
    // todo list 전체 삭제 이벤트 등록
    this.renderEle.addEventListener('removeAll', (event) => {
      this.removeAllTodoList()
    })
  }

  this.components = {
    usersComponent: new Users({
      renderEle: this.renderEle,
      data: this.data.users,
      clickUser: this.clickUser,
    }),
    userComponent: new User({
      renderEle: this.renderEle,
      data: this.data.userName,
    }),
    unCompletedtodoListComponent: new TodoList({
      renderEle: this.renderEle,
      data: this.data.todoList,
      setTodoListIsCompleted: this.setTodoListIsCompleted,
      removeTodoList: this.removeTodoList,
      isDisplayCompleted: false,
    }),
    completedTodoListComponent: new TodoList({
      renderEle: this.renderEle,
      data: this.data.todoList,
      setTodoListIsCompleted: this.setTodoListIsCompleted,
      removeTodoList: this.removeTodoList,
      isDisplayCompleted: true,
    }),
    todoCountComponent: new TodoCount({
      renderEle: this.renderEle,
      data: this.data.todoList,
    }),
    todoInputComponent: new TodoInput({
      renderEle: this.renderEle,
      addTodoList: this.addTodoList,
    }),
    todoRemoveAllButtonComponent: new TodoRemoveAllButton({
      renderEle: this.renderEle,
      dispatchReoveAllEvent: () => {
        this.renderEle.dispatchEvent(new Event('removeAll'))
      },
    }),
  }

  this.firstRender = true

  this.render()
  this.setEventOnTodoList()
}
