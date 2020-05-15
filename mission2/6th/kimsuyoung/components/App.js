import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'

export default function App() {
  const $app = document.querySelector('#container')
  // 컴포넌트들
  this.init = () => {
    this.data = []
    this.todoList = new TodoList({
      data: this.data,
      selector: document.querySelector('#todo-list'),
      onDeleteTodoList: deleteTodoList,
      onToggleCompleted: setTodoCompleted,
      onDeleteAllTodoList: removeAllTodoList,
    })
    this.todoInput = new TodoInput({
      $app,
      inputSelector: document.querySelector('#todo-input'),
      removeAllSelector: document.querySelector('#remove-all-button'),
      onAddTodoList: addTodoList,
      //eventTrigger,
    })
    this.todoCount = new TodoCount({
      data: getTodoCount(),
      selector: '#todo-count',
    })
    this.todoCount.render()
  }

  this.setState = (nextData) => {
    this.data = nextData
    this.todoList.setState(this.data)
    this.todoCount.setState(getTodoCount())
  }

  const getTodoCount = () => {
    return {
      totalCount: this.data.length,
      completedCount: this.data.filter((item) => item.isCompleted).length,
    }
  }

  const addTodoList = (nextData) => {
    this.setState([
      ...this.data,
      {
        id: String(Date.now()),
        text: nextData,
        isCompleted: false,
      },
    ])
  }

  const deleteTodoList = (id) => {
    const nextData = this.data.filter((item) => item.id !== id)
    this.setState(nextData)
  }

  const setTodoCompleted = (id) => {
    const nextData = this.data
    const index = nextData.findIndex((item) => item.id === id)
    nextData[index].isCompleted = !nextData[index].isCompleted
    this.setState(nextData)
  }

  const removeAllTodoList = () => {
    const nextData = []
    this.setState(nextData)
  }

  $app.addEventListener('removeAll', () => {
    this.setState([])
  })
  //const eventTrigger = (event) => this.todoList.$todoList.dispatchEvent(event)

  this.init()
}
