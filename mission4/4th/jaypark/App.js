import TodoAPI from './TodoAPI.js'
import UserList from './UserList.js'
import PurgeBtn from './PurgeBtn.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import TodoInput from './TodoInput.js'
import TitlePanel from './TitlePanel.js'
import { log, validate, installFetch } from './utils.js'

const firstUser = 'jaypark'

class App {
  constructor() {
    this.initApp()
  }
  
  initApp() {
    installFetch()
    this.initStore()
    this.initUIComponents()
    this.connectComponents()
    this.loadData()
  }

  initStore() {
    this.todoAPI = new TodoAPI(firstUser)
  }

  initUIComponents() {
    this.todoCount = new TodoCount('#todo-count-text')
    this.todoInput = new TodoInput('#new-item', '#new-btn')

    this.titlePanel = new TitlePanel('#user-name', firstUser)
    this.purgeBtn = new PurgeBtn('#purge-btn', this.todoAPI)
    this.userList = new UserList('#user-list', this.titlePanel, this.todoAPI)
    this.todoList = new TodoList('#todo-list', this.todoAPI)
  }

  connectComponents() {
    this.todoAPI.addListener(this.todoCount)
    this.todoAPI.addListener(this.todoList)
    this.todoInput.setAddItem(this.todoAPI.addItem.bind(this.todoAPI))
  }

  loadData() {
    this.todoAPI.update()
    this.userList.render()
    this.titlePanel.render()
  }
}

const app = new App()
