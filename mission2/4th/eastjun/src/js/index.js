import '../css/style.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoCount from './components/TodoCount'

const App = (() => {
  const init = () => {
    TodoInput.init()
    TodoList.init()
    TodoCount.init()
  }

  return {
    init,
  }
})()

App.init()
