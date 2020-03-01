import TodoCount from './TodoCount.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoUsers from './TodoUsers.js'
import api from '../api.js'

function App() {
  this.data = null
  this.userData = null

  this.todoCountId = 'todo-count'
  this.todoListId = 'todo-list'
  this.todoInputId = 'todo-input'
  this.todoUserList = 'user-list-wrapper'

  this.todoTitle = null
  this.todoCount = null
  this.todoList = null

  this.userName = 'jeesoo'

  const handleClickTodoItem = async id => {
    try {
      await api.toggleTodoItem(this.userName, this.data[id]._id)
      this.setState(await api.fetchTodoList(this.userName))
    } catch (e) {
      console.log(e)
    }
  }

  const handleDeleteTodoItem = async id => {
    try {
      await api.deleteTodoItem(this.userName, this.data[id]._id)
      this.setState(await api.fetchTodoList(this.userName))
    } catch (e) {
      console.log(e)
    }
  }

  const handleInputTodoItem = async item => {
    try {
      await api.addNewTodoItem(this.userName, item)
      this.setState(await api.fetchTodoList(this.userName))
    } catch (e) {
      console.log(e)
    }
  }

  const handleClickUser = async user => {
    this.userName = user
    this.todoTitle.innerHTML = `${this.userName}의 TODO LIST`
    this.setState(await api.fetchTodoList(this.userName))
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
      this.data = await api.fetchTodoList(this.userName)
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
      this.data = newData
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

    this.todoTitle.innerHTML = `${this.userName}의 TODO LIST`

    try {
      this.todoCount = new TodoCount({
        $element: $todoCount,
        data: this.getTodoCountData(this.data),
      })

      this.todoList = new TodoList({
        $element: $todoList,
        data: this.data,
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
