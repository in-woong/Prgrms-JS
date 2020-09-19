import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import { fetchData, insertData, removeData, toggleData } from './utils/api.js'

export default function App() {
  this.$todoList = document.querySelector(`#todo-list`)
  this.$todoCount = document.querySelector(`.count-box`)
  this.$insertForm = document.querySelector('#insert-form')
  this.$removeAllBtn = document.querySelector('.remove-btn')

  this.init = function () {
    // 모두삭제 커스텀 이벤트
    this.$removeAllBtn.addEventListener('click', (e) => {
      const removeAllEvent = new CustomEvent('removeAll')
      this.$todoList.dispatchEvent(removeAllEvent)
    })
    this.$todoList.addEventListener('removeAll', async (e) => {
      const data = await fetchData()
      data.forEach(async (item) => {
        await removeData(item._id)
      })
      this.setState([])
    })
  }

  this.setState = (newData) => {
    this.todos = newData
    this.todoList.setState(this.todos)
    this.todoCount.setState(this.todos)
  }

  this.render = async () => {
    this.todoList = new TodoList({
      data: await fetchData(),
      $target: this.$todoList,
      onRemoveTodo: async (id) => {
        await removeData(id)
        const newData = await fetchData()
        this.setState(newData)
      },
      onToggleTodo: async (id) => {
        await toggleData(id)
        const newData = await fetchData()
        this.setState(newData)
      },
    })
    this.todoInput = new TodoInput({
      $target: this.$insertForm,
      onInsertTodo: async (content) => {
        await insertData(content)
        const newData = await fetchData()
        this.setState(newData)
      },
    })
    this.todoCount = new TodoCount({
      data: await fetchData(),
      $target: this.$todoCount,
    })
  }
  this.init()
  this.render()
}
