import { getBackUpTodo, getDOM } from './util.js'

import inputHandler from './inputHandler.js'
import listHandler from './listHandler.js'
import removeAllHandler from './removeAllHandler.js'

import TodoList from './TodList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import TodoRemoveAll from './TodoRemoveAll.js'

function App() {
  this.todoData = getBackUpTodo()

  this.$listDOM = getDOM('#todo-list')
  this.$inputDOM = getDOM('#todo-input')
  this.$countDOM = getDOM('#todo-count')
  this.$removeAllBtnDOM = getDOM('#todo-removeAll')

  this.listHandler = listHandler.bind(this)
  this.inputHandler = inputHandler.bind(this)
  this.removeAllHandler = removeAllHandler.bind(this)

  this.todoList = new TodoList(this)
  this.todoInput = new TodoInput(this)
  this.todoCount = new TodoCount(this)
  this.todoRemoveAll = new TodoRemoveAll(this)
}

export default App
