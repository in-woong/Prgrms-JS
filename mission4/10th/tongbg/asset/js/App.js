import { focusDOM, debounce } from './common/util.js'
import { getTodoList, setTodoList, deleteAll, deleteTodo, toggleTodo } from './common/api.js'

import TodoList from './components/TodList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import TodoRest from './components/TodoRest.js'

const username = 'tongbg'

function App($App) {
  return (async () => {
    this.todoData = await getTodoList(username)

    $App.innerHTML = `<h1>Todo LIST</h1>`

    const $interfaceDOM = document.createElement('div')
    $interfaceDOM.className = 'todo-interface'
    $App.appendChild($interfaceDOM)

    // input 키보드 입력 처리
    const onKeyUpTodoList = debounce(async (e) => {
      if (e.key === 'Enter') {
        const textArr = e.target.value.split(/;/).filter((text) => text.trim() !== '')
        const loadingGif = document.querySelector('.loading-gif')

        if (textArr.length > 0) {
          loadingGif.classList.add('on')

          for (const todoText of textArr) {
            await setTodoList(username, todoText)
          }

          loadingGif.classList.remove('on')

          // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
          const updatedData = await getTodoList(username)
          this.setState(updatedData)

          e.target.value = ''
          focusDOM('#todo-input')
        }
      }
    }, 1000)

    const onClickReset = async () => {
      const event = new CustomEvent('removeAll')
      const $todoListDOM = document.querySelector('#todo-list')

      $todoListDOM.addEventListener('removeAll', async () => {
        await deleteAll(username)

        // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
        const updatedData = await getTodoList(username)
        this.setState(updatedData)

        focusDOM('#todo-input')
      })

      $todoListDOM.dispatchEvent(event)
    }

    const onClickTodoList = async (e) => {
      const targetTodoId = e.target.parentNode.dataset.id
      let updatedData = []

      switch (e.target.className) {
        case 'todo-checkbox':
        case 'todo-checkbox checked':
          await toggleTodo(username, targetTodoId)

          // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
          updatedData = await getTodoList(username)
          this.setState(updatedData)

          focusDOM('#todo-input')
          break

        case 'del-btn':
          await deleteTodo(username, targetTodoId)

          // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
          updatedData = await getTodoList(username)
          this.setState(updatedData)

          focusDOM('#todo-input')
          break
      }
    }

    this.setState = (nextState) => {
      this.todoData = nextState
      this.todoList.setState(this.todoData)
      this.todoCount.setState(this.todoData)
    }

    this.todoInput = new TodoInput({ $interfaceDOM, onKeyUpTodoList })
    this.todoRest = new TodoRest({ $interfaceDOM, onClickReset })

    this.todoList = new TodoList({ $App, initData: this.todoData, onClickTodoList })
    this.todoCount = new TodoCount({ $App, initData: this.todoData })
  })()
}

export default App
