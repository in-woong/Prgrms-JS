import Users from './Users.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'

import { USER_NAME } from '../assets/constants.js'
import { createDOMElement } from '../utils/dom.js'
import { request } from "../utils/api.js"

export default function App($app) {
  this.$userList = createDOMElement($app, 'ul') // Users DOM $target
  this.$userList.setAttribute('id', 'user-list')
  this.$form = createDOMElement($app, 'form')  // todoInput DOM $target
  this.$form.setAttribute('id', 'todo-form')
  this.$todoList = createDOMElement($app, 'div') // todoList, todoCount DOM $target
  this.$todoList.setAttribute('id', 'todo-list')

  this.state = []
  this.userName = this.userName ? this.userName : USER_NAME

  
  this.fetchData = async () => {
    const todoData = await request.getTodo(this.userName)
    this.setState(todoData)
  }

  this.fetchData() // 초기 데이터 로드

  const todoUsers = new Users({
    $target: this.$userList,
    userName: this.userName,
    onClickUser: (newUserName) => {
      this.setUserName(newUserName)
    }
  })

  const todoInput = new TodoInput({
    $target: this.$form,
    userName: this.userName,
    addTodo: async (newTodo) => {
      this.setState([...this.state, { content: newTodo, isCompleted: false }])
      await request.addTodo(this.userName, newTodo)
    },
    removeAllTodo: async () => {  
      await request.deleteAllTodo(this.userName)
      this.setState([]) // 상태 초기화
    }
  })
  const todoList = new TodoList({
    $target: this.$todoList,
    initialState: this.state,
    removeTodo: async (id) => {
      await request.deleteTodo(this.userName, this.state[id]._id)
      const filteredState = this.state.filter(item => this.state.indexOf(item) !== id)
      this.setState(filteredState)
    },
    checkTodo: async (id) => {
      await request.toggleTodo(this.userName, this.state[id]._id)
      this.state[id].isCompleted = !this.state[id].isCompleted
      this.setState(this.state)
    }
  })
  const todoCount =  new TodoCount({
    $target: this.$todoList,
    initialState: {
      totalCount: this.state.length,
      completedCount: this.state.filter(todo => todo.isCompleted).length
    }
  })

  // App에서 모든 상태 변화 관리
  this.setUserName = (nextUserName) => {
    this.userName = nextUserName
    todoUsers.setState(this.userName)
    todoInput.setState(this.userName)
    this.fetchData()          // 유저에 맞는 데이터 로드
    this.setState(this.state)
  }

  this.setState = (nextState) => { 
    this.state = nextState
    todoList.setState(this.state)
    todoCount.setState({
      totalCount: this.state.length,
      completedCount: this.state.filter(todo => todo.isCompleted).length
    })
  }
}
