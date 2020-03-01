import Loading from './Loading.js'
import TodoCount from './TodoCount.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoUsers from './TodoUsers.js'
import api from '../api.js'

const getTodoTitle = name => `${name}의 TODO LIST`

function App() {
  // 현재 App에서 사용하는 데이터 변수
  this.todoData = null
  this.userData = null
  this.userName = 'jeesoo' // default 사용자 이름

  // Element Id 변수
  this.todoCountId = 'todo-count'
  this.todoListId = 'todo-list'
  this.todoInputId = 'todo-input'
  this.todoUserList = 'user-list-wrapper'

  // 컴포넌트 변수
  this.loading = null
  this.todoTitle = null
  this.todoCount = null
  this.todoList = null

  const handleClickTodoItem = async id => {
    try {
      await api.toggleTodoItem(this.userName, this.todoData[id]._id)
      const updateData = await this.setLoadingBeforeFetch(() =>
        api.fetchTodoList(this.userName)
      )
      this.setState(updateData)
    } catch (e) {
      console.log(e)
    }
  }

  const handleDeleteTodoItem = async id => {
    try {
      await api.deleteTodoItem(this.userName, this.todoData[id]._id)
      const updateData = await this.setLoadingBeforeFetch(() =>
        api.fetchTodoList(this.userName)
      )
      this.setState(updateData)
    } catch (e) {
      console.log(e)
    }
  }

  const handleInputTodoItem = async item => {
    try {
      await api.addNewTodoItem(this.userName, item)
      const updateData = await this.setLoadingBeforeFetch(() =>
        api.fetchTodoList(this.userName)
      )
      this.setState(updateData)
    } catch (e) {
      console.log(e)
    }
  }

  const handleClickUser = async user => {
    this.userName = user
    this.todoTitle.innerHTML = getTodoTitle(this.userName)
    const updateData = await this.setLoadingBeforeFetch(() =>
      api.fetchTodoList(this.userName)
    )
    this.setState(updateData)
  }

  // 데이터를 로딩하는 중 로딩 화면 띄워주기
  this.setLoadingBeforeFetch = async function(fetchApi) {
    this.loading.setState(true)
    const result = await fetchApi()
    this.loading.setState(false)
    return result
  }

  this.getTodoCountData = function(data) {
    return {
      totalCount: data.length,
      completedCount:
        data.length > 0 ? data.filter(item => item.isCompleted).length : 0,
    }
  }

  this.init = async function() {
    try {
      this.loading = new Loading(document.querySelector('#loading'))
      this.todoData = await this.setLoadingBeforeFetch(() =>
        api.fetchTodoList(this.userName)
      )
      this.userData = await api.fetchUserDataList()
    } catch (e) {
      console.log(e)
      return
    }

    this.todoTitle = document.querySelector(`#todo-title`)
    this.render()
  }

  this.setState = function(newData) {
    try {
      this.todoCount.setState(this.getTodoCountData(newData))
      this.todoList.setState(newData)
      this.todoData = newData
    } catch (e) {
      console.log(e)
      return
    }
  }

  this.render = function() {
    const $todoCount = document.querySelector(`#${this.todoCountId}`)
    const $todoList = document.querySelector(`#${this.todoListId}`)
    const $todoInput = document.querySelector(`#${this.todoInputId}`)
    const $todoUserList = document.querySelector(`#${this.todoUserList}`)

    this.todoTitle.innerHTML = getTodoTitle(this.userName)

    try {
      this.todoCount = new TodoCount({
        $element: $todoCount,
        data: this.getTodoCountData(this.todoData),
      })

      this.todoList = new TodoList({
        $element: $todoList,
        data: this.todoData,
        onClickItem: handleClickTodoItem,
        onDelete: handleDeleteTodoItem,
      })

      new TodoInput({
        $element: $todoInput,
        onInput: handleInputTodoItem,
      })

      new TodoUsers({
        $element: $todoUserList,
        data: this.userData,
        onClickUser: handleClickUser,
      })
    } catch (e) {
      console.log(e)
      return
    }
  }

  this.init()
}

export default App
