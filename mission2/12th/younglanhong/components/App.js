import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'

import { createDOMElement } from '../utils/dom.js'
import { customRemoveAll } from '../utils/customEvent.js'

import { getStorageData, setStorageData } from '../assets/data.js'

export default function App($app) {
  this.$form = createDOMElement($app, 'form')  // todoInput DOM $target
  this.$form.setAttribute('id', 'todo-form')
  this.$todoList = createDOMElement($app, 'div') // todoList, todoCount DOM $target
  this.$todoList.setAttribute('id', 'todo-list')
  
  this.state = getStorageData()  // 전체 상태

  // App이 TodoInput과 TodoList를 관리
  const todoInput = new TodoInput({
    $target: this.$form,
    addTodo: (newTodo) => {
      this.setState([...this.state, { text: newTodo, isCompleted: false }])
    },
    removeAllTodo: () => {
      // 커스텀 이벤트 호출
      const dispatchRemoveAll = customRemoveAll(this.$form, this.$todoList)
      this.$form.dispatchEvent(dispatchRemoveAll)    
      this.setState([]) // 상태 초기화
    }
  })
  const todoList = new TodoList({
    $target: this.$todoList,
    initialState: this.state,
    removeTodo: (id) => {
      // 🔥 immutable state
      const filteredState = this.state.filter(item => this.state.indexOf(item) !== id)
      this.setState(filteredState)
    },
    checkTodo: (id) => {
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
  this.setState = (nextState) => {
    this.state = nextState
    todoList.setState(this.state)
    todoCount.setState({
      totalCount: this.state.length,
      completedCount: this.state.filter(todo => todo.isCompleted).length
    })
    // localStorage에 데이터 저장
    setStorageData(this.state)
  }
}
