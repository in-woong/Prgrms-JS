import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import { validateData } from './validation.js'
import { getLocalStorageData, setLocalStorageData } from './localStorage.js'

const TODOS_STORAGE_KEY = 'todos'

function App($app) {
  // 프로그램 초기 기동 시 todo는 localStorage에 저장해둔 todo
  this.state = getLocalStorageData(TODOS_STORAGE_KEY)

  // App에서 removeAll 이라는 이벤트를 받기
  $app.addEventListener('removeAll', () => this.setState([]))

  this.setState = (newState) => {
    validateData(newState)
    this.state = newState
    todoList.setState(newState)
    todoCount.setState(newState)
    // todo data가 변경될 때마다 localStorage에 저장
    setLocalStorageData(TODOS_STORAGE_KEY, newState)
  }

  const addTodo = (newText) => {
    const newTodo = {
      text: newText,
      isCompleted: false,
    }

    this.setState([...this.state, newTodo])
  }

  const removeTodo = (currentIndex) => {
    this.setState(this.state.filter((todo, index) => index !== currentIndex))
  }

  const toggleTodo = (toggleIndex) => {
    this.setState(
      this.state.map((todo, index) =>
        index === toggleIndex
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    )
  }

  const todoInput = new TodoInput({
    $app: $app,
    addTodo: addTodo,
  })

  const todoList = new TodoList({
    $app: $app,
    state: this.state,
    removeTodo: removeTodo,
    toggleTodo: toggleTodo,
  })

  const todoCount = new TodoCount({
    $app: $app,
    state: this.state,
  })
}

export default App
