import { focusDOM, debounce } from './common/util.js'
import { getTodoList, setTodoList, deleteAll, deleteTodo, toggleTodo, getUserList } from './common/api.js'

import TodoList from './components/TodList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import TodoRest from './components/TodoRest.js'
import TodoUserList from './components/TodoUserList.js'

function App($App) {
  return (async () => {
    this.state = {}
    this.state.currentUser = 'tongbg'
    this.state.todoList = await getTodoList(this.state.currentUser)
    this.state.userList = await getUserList()

    $App.innerHTML = `<header><div><h2>${this.state.currentUser}</h2><span>'s</span></div><h1>Todo LIST</h1></header>`

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
            await setTodoList(this.state.currentUser, todoText)
          }

          loadingGif.classList.remove('on')

          // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
          const updatedData = await getTodoList(this.state.currentUser)
          this.setState({ ...this.state, todoList: updatedData })

          e.target.value = ''
          focusDOM('#todo-input')
        }
      }
    }, 1000)

    // 전체삭제 버튼 클릭
    const onClickReset = debounce(async () => {
      const event = new CustomEvent('removeAll')
      const $todoListDOM = document.querySelector('#todo-list')

      $todoListDOM.addEventListener('removeAll', async () => {
        await deleteAll(this.state.currentUser)

        // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
        const updatedData = await getTodoList(this.state.currentUser)
        this.setState({ ...this.state, todoList: updatedData })

        focusDOM('#todo-input')
      })

      $todoListDOM.dispatchEvent(event)
    }, 1000)

    // todoList 클릭시
    const onClickTodoList = debounce(async (e) => {
      const targetTodoId = e.target.parentNode.dataset.id
      let updatedData = []

      switch (e.target.className) {
        case 'todo-checkbox':
        case 'todo-checkbox checked':
          await toggleTodo(this.state.currentUser, targetTodoId)

          // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
          updatedData = await getTodoList(this.state.currentUser)
          this.setState({ ...this.state, todoList: updatedData })

          focusDOM('#todo-input')
          break

        case 'del-btn':
          await deleteTodo(this.state.currentUser, targetTodoId)

          // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
          updatedData = await getTodoList(this.state.currentUser)
          this.setState({ ...this.state, todoList: updatedData })

          focusDOM('#todo-input')
          break
      }
    }, 1000)

    // 유저 클릭시
    const onClickUser = debounce(async (e) => {
      if (e.target.tagName === 'LI') {
        const targetUserName = e.target.innerText
        const updatedData = await getTodoList(targetUserName)
        this.setState({ ...this.state, currentUser: targetUserName, todoList: updatedData })

        document.querySelector('header h2').innerText = targetUserName
      }
    }, 1000)

    this.setState = (nextState) => {
      this.state = nextState

      this.todoList.setState(this.state.todoList)
      this.todoCount.setState(this.state.todoList)
      this.todoUserList.setState({ userList: this.state.userList, currentUser: this.state.currentUser })
    }

    this.todoInput = new TodoInput({ $interfaceDOM, onKeyUpTodoList })
    this.todoRest = new TodoRest({ $interfaceDOM, onClickReset })

    this.todoList = new TodoList({ $App, initDodoList: this.state.todoList, onClickTodoList })
    this.todoCount = new TodoCount({ $App, initDodoList: this.state.todoList })

    this.todoUserList = new TodoUserList({ $App, onClickUser, initUserList: this.state.userList, initUserName: this.state.currentUser })
  })()
}

export default App
