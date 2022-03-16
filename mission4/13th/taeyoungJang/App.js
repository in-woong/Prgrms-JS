import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import { isValidConstructor, isValidParameter, isValidTarget } from './utils.js'
import { getTodos, addTodo, deleteTodo, toggleTodo } from './api.js'

const USERNAME = 'taeyoungJang'

function App({ $target }) {
  isValidTarget($target)
  isValidConstructor.call(this, App)

  this.$target = $target
  this.state = []

  this.$todoList = document.createElement('div')
  this.$form = document.createElement('form')
  this.$todoCount = document.createElement('div')

  this.todoCount = new TodoCount({
    $target: this.$todoCount,
    initalState: this.state,
  })

  this.todoList = new TodoList({
    $target: this.$todoList,
    initialState: this.state,
    onClickTodo: async (e) => {
      const selectedId = e.target.dataset.id

      try {
        await toggleTodo({ username: USERNAME, id: selectedId })

        // #1 네트워크 재요청
        const newState = await getTodos(USERNAME)

        // #2 낙관적 업데이트
        // const newState = this.state.map((todo) =>
        //   selectedId === todo._id
        //     ? {
        //         ...todo,
        //         isCompleted: !todo.isCompleted,
        //       }
        //     : todo
        // )

        this.setState(newState)
      } catch (error) {
        alert(error.message)
      }
    },
    onDeleteTodo: async (e) => {
      const selectedId = e.target.parentNode.dataset.id

      try {
        await deleteTodo({ username: USERNAME, id: selectedId })

        // #1 네트워크 재요청
        const newState = await getTodos(USERNAME)

        // #2 낙관적 업데이트
        // const newState = this.state.filter((todo) => selectedId !== todo._id)

        this.setState(newState)
      } catch (error) {
        alert(error.message)
      }
    },
  })

  this.todoInput = new TodoInput({
    $target: this.$form,
    onAddTodo: async (content) => {
      try {
        await addTodo({ username: USERNAME, content })

        // #1 네트워크 재요청
        const newState = await getTodos(USERNAME)

        // #2 낙관적 업데이트
        // const date = new Date()
        // const newTodo = {
        //   _id: date.getTime() + '',
        //   content,
        //   isCompleted: false,
        // }
        // const newState = [...this.state, newTodo]

        this.setState(newState)
      } catch (error) {
        alert(error.message)
      }
    },
  })

  this.setState = function (newState) {
    isValidParameter(newState)

    this.state = newState

    this.todoList.setState(newState)
    this.todoCount.setState(newState)
  }

  this.onRemoveAll = async () => {
    try {
      await deleteTodoAll(USERNAME)

      // #1 네트워크 재요청
      const newState = await getTodos(USERNAME)

      this.setState(newState)

      // #2 낙관적 업데이트
      // this.setState([])
    } catch (error) {
      alert(error.message)
    }
  }

  this.$target.addEventListener('removeAll', this.onRemoveAll.bind(this))

  this.getInitialState = async () => {
    const initialState = await getTodos(USERNAME)

    this.setState(initialState)
  }

  this.render = async () => {
    await this.getInitialState()

    this.$target.appendChild(this.$form)
    this.$target.appendChild(this.$todoList)
    this.$target.appendChild(this.$todoCount)
  }

  this.render()
}

export default App
