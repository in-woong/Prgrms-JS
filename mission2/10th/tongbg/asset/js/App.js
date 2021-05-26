import { getBackUpTodo, setBackUpTodo, focusDOM } from './common/util.js'

import TodoList from './components/TodList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import TodoRest from './components/TodoRest.js'

const STORED_KEY = 'storedTodo'

function App($App) {
  this.todoData = getBackUpTodo(STORED_KEY, [])

  $App.innerHTML = `<h1>Todo LIST</h1>`

  const $interfaceDOM = document.createElement('div')
  $interfaceDOM.className = 'todo-interface'
  $App.appendChild($interfaceDOM)

  const onKeyUpTodoList = (e) => {
    if (e.key === 'Enter') {
      const textArr = e.target.value.split(/;/).filter((text) => text.trim() !== '')

      const appendData = textArr.map((text) => {
        return { text, isCompleted: false }
      })

      this.setState([...this.todoData, ...appendData])
      e.target.value = ''
    }
  }

  const onClickReset = (e) => {
    const event = new CustomEvent('removeAll')
    const $todoListDOM = document.querySelector('#todo-list')

    $todoListDOM.addEventListener('removeAll', (e) => {
      this.setState([])
    })
    $todoListDOM.dispatchEvent(event)
  }

  const onClickTdoList = (e) => {
    const targetIdx = Array.from(e.currentTarget.children).indexOf(e.target.parentNode)
    let nextState = []

    switch (e.target.className) {
      case 'todo-checkbox':
      case 'todo-checkbox checked':
        nextState = this.todoData.map(({ text, isCompleted }, idx) => {
          return idx === targetIdx ? { text, isCompleted: !isCompleted } : { text, isCompleted }
        })

        this.setState(nextState)
        break

      case 'del-btn':
        nextState = this.todoData.filter((todo, idx) => idx !== targetIdx)

        this.setState(nextState)
        break
    }
  }

  this.todoInput = new TodoInput({ $interfaceDOM, onKeyUpTodoList })
  this.todoRest = new TodoRest({ $interfaceDOM, onClickReset })

  this.todoList = new TodoList({ $App, initData: this.todoData, onClickTdoList })
  this.todoCount = new TodoCount({ $App, initData: this.todoData })

  this.setState = (nextState) => {
    this.todoData = nextState
    this.todoList.setState(nextState)
    this.todoCount.setState(nextState)
    setBackUpTodo(STORED_KEY, nextState)

    focusDOM('#todo-input')
  }
}

export default App
