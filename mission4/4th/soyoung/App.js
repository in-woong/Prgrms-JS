import TodoUsers from './components/TodoUsers.js'
import TodoInput from './components/TodoInput.js'
import TodoList from './components/TodoList.js'
import TodoCount from './components/TodoCount.js'
import { fetchData, getUsers, addData, toggleData, removeData } from './api.js'
import { isElement } from './utils.js'

export default function App(element) {
  if (!isElement(element)) throw new Error('Invalid element')

  // data
  this.$titleElement = element.querySelector('.todo__title')
  this.$loadingSpinner = document.querySelector('#loading-spinner')
  this.username = 'soyoung'
  this.todoItems = []
  this.userList = []
  this.getTodoCount = () => ({
    totalCount: this.todoItems.length,
    completedCount: this.todoItems.filter(item => item.isCompleted).length,
  })

  // components
  this.todoUsers = new TodoUsers({
    $target: document.querySelector('#user-list'),
    onClick: async username => {
      await this.actionWithToggleSpinner(async () => {
        this.setUser(username)
        await this.fetchData()
      })
    },
  })
  this.todoInput = new TodoInput({
    onAddTodo: async todoText => {
      await this.actionWithToggleSpinner(async () => {
        await addData(this.username, todoText)
        await this.fetchData()
      })
    },
    onRemoveAll: event => {
      this.todoList.$target.dispatchEvent(event)
    },
  })

  this.todoList = new TodoList({
    $target: document.querySelector('#todo-list'),
    onToggleTodo: async id => {
      await this.actionWithToggleSpinner(async () => {
        await toggleData(this.username, id)
        await this.fetchData()
      })
    },
    onRemoveTodo: async id => {
      await this.actionWithToggleSpinner(async () => {
        await removeData(this.username, id)
        await this.fetchData()
      })
    },
    onRemoveAllTodo: () => {
      const backupList = this.todoItems
      try {
        this.todoItems.forEach(({ _id }) => {
          removeData(this.username, _id)
        })
        // 낙관적 업데이트를 시도해 보았습니다.
        this.todoItems = []
        this.render()
      } catch (error) {
        this.todoItems = backupList
        this.render()
      }
    },
  })

  this.todoCount = new TodoCount({
    $target: document.querySelector('#todo-count'),
    ...this.getTodoCount(),
  })

  //methods
  this.fetchData = async () => {
    const data = await fetchData(this.username)
    console.log(data)
    this.todoItems = data
    this.render()
  }

  this.getUsers = async () => {
    const data = await getUsers()
    this.userList = data
    this.todoUsers.setState(this.userList)
  }

  this.setUser = username => {
    this.username = username
    this.$titleElement.innerHTML = `${this.username}'s Todo List`
  }

  this.render = () => {
    this.todoList.setState(this.todoItems)
    this.todoCount.setState(this.getTodoCount())
  }

  this.actionWithToggleSpinner = async action => {
    this.$loadingSpinner.classList.add('visible')
    await action()
    this.$loadingSpinner.classList.remove('visible')
  }

  //initiate
  this.actionWithToggleSpinner(async () => {
    await this.getUsers()
    this.setUser(this.username)
    await this.fetchData()
  })
}
