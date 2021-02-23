import { focusDOM, debounce } from './common/util.js'
import { getTodoList, setTodoList, deleteAll, deleteTodo, toggleTodo, getUserList } from './common/api.js'

import TodoList from './components/TodList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import TodoRest from './components/TodoRest.js'
import TodoUserList from './components/TodoUserList.js'
import LoadingUI from './components/LoadingUI.js'
import popupUI from './components/popupUI.js'

function App($App) {
  return (async () => {
    this.state = {}
    this.state.currentUser = ''
    this.state.todoList = []

    const initUserList = await getUserList()
    initUserList.isOK ? (this.state.userList = initUserList.userList) : (this.state.userList = [])

    this.state.isProgressing = false

    this.state.isPopupVisible = true
    this.state.popupTitle = 'Todo 시작하기'
    this.state.popupMsg = '등록된 유저를 선택하세요!'

    $App.innerHTML = `<header><div><h2>${this.state.currentUser}</h2><span></span></div><h1>Todo LIST</h1></header>`

    this.$interfaceDOM = document.createElement('div')
    this.$interfaceDOM.className = 'todo-interface'
    $App.appendChild(this.$interfaceDOM)

    const loadTodoList = async () => {
      this.setState({ ...this.state, isProgressing: true })

      const { isOK, todoList, popupTitle, popupMsg } = await getTodoList(this.state.currentUser)
      isOK ? this.setState({ ...this.state, todoList, isProgressing: false }) : this.setState({ ...this.state, isPopupVisible: true, popupTitle, popupMsg })

      focusDOM('#todo-input')
    }

    // input 키보드 입력 처리
    const onKeyUpTodoList = debounce(async (e) => {
      if (e.key === 'Enter') {
        const textArr = e.target.value.split(/;/).filter((text) => text.trim() !== '')

        if (textArr.length > 0) {
          let rtrnValue

          for (const todoText of textArr) {
            rtrnValue = await setTodoList(this.state.currentUser, todoText)
          }

          const { isOK, popupTitle, popupMsg } = rtrnValue
          isOK ? loadTodoList() : this.setState({ ...this.state, isPopupVisible: true, popupTitle, popupMsg })

          e.target.value = ''
        }
      }
    }, 1000)

    // 전체삭제 버튼 클릭
    const onClickReset = debounce(async () => {
      const event = new CustomEvent('removeAll')
      const $todoListDOM = document.querySelector('#todo-list')

      $todoListDOM.addEventListener('removeAll', async () => {
        const { isOK, popupTitle, popupMsg } = await deleteAll(this.state.currentUser)
        isOK ? loadTodoList() : this.setState({ ...this.state, isPopupVisible: true, popupTitle, popupMsg })
      })

      $todoListDOM.dispatchEvent(event)
    }, 1000)

    // todoList 클릭시
    const onClickTodoList = debounce(async (e) => {
      const targetTodoId = e.target.parentNode.dataset.id

      switch (e.target.className) {
        case 'todo-checkbox':
        case 'todo-checkbox checked':
          {
            const { isOK, popupTitle, popupMsg } = await toggleTodo(this.state.currentUser, targetTodoId)
            isOK ? loadTodoList() : this.setState({ ...this.state, isPopupVisible: true, popupTitle, popupMsg })
          }
          break

        case 'del-btn':
          {
            const { isOK, popupTitle, popupMsg } = await deleteTodo(this.state.currentUser, targetTodoId)
            isOK ? loadTodoList() : this.setState({ ...this.state, isPopupVisible: true, popupTitle, popupMsg })
          }
          break
      }
    }, 1000)

    // 유저 클릭시
    const onClickUser = debounce(async (e) => {
      if (e.target.tagName === 'LI') {
        this.setState({ ...this.state, isProgressing: true })

        const targetUserName = e.target.innerText
        const { isOK, todoList, popupTitle, popupMsg } = await getTodoList(targetUserName)

        isOK ? this.setState({ ...this.state, currentUser: targetUserName, todoList, isProgressing: false }) : this.setState({ ...this.state, isPopupVisible: true, popupTitle, popupMsg })
      }
    }, 1000)

    // 팝업 닫기 클릭시
    const onClickPopupCls = () => {
      this.setState({ ...this.state, isPopupVisible: false, isProgressing: false })
    }

    this.setState = (nextState) => {
      this.state = nextState

      this.todoList.setState(this.state.todoList)
      this.todoCount.setState(this.state.todoList)
      this.todoUserList.setState({ userList: this.state.userList, currentUser: this.state.currentUser })

      this.loadingUI.setState(this.state.isProgressing)
      this.popupUI.setState({ isPopupVisible: this.state.isPopupVisible, popupTitle: this.state.popupTitle, popupMsg: this.state.popupMsg })

      this.render()
    }

    this.render = () => {
      const currentUser = this.state.currentUser

      document.querySelector('header h2').innerText = currentUser ? currentUser : ''
      document.querySelector('header span').innerText = currentUser ? `'S` : ''

      currentUser ? this.$interfaceDOM.classList.remove('hidden') : this.$interfaceDOM.classList.add('hidden')
      window.scrollTo(0, 0)
    }

    this.todoInput = new TodoInput({ $interfaceDOM: this.$interfaceDOM, onKeyUpTodoList })
    this.todoRest = new TodoRest({ $interfaceDOM: this.$interfaceDOM, onClickReset })

    this.todoList = new TodoList({ $App, initTodoList: this.state.todoList, onClickTodoList })
    this.todoCount = new TodoCount({ $App, initTodoList: this.state.todoList })

    this.todoUserList = new TodoUserList({ $App, onClickUser, initUserList: this.state.userList, initUserName: this.state.currentUser })

    this.loadingUI = new LoadingUI({ $App, initProgressing: this.state.isProgressing })
    this.popupUI = new popupUI({ $App, initPopupVisible: this.state.isPopupVisible, initPopupTitle: this.state.popupTitle, initPopupMsg: this.state.popupMsg, onClickPopupCls })

    this.render()
  })()
}

export default App
