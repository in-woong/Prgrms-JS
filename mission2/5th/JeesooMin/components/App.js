import TodoCount from './TodoCount.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'

function App() {
  this.data = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
  ]

  this.todoCountId = 'todo-count'
  this.todoListId = 'todo-list'
  this.todoInputId = 'todo-input'

  this.todoCount = null
  this.todoList = null

  const handleClickItem = id => {
    const updatedData = [...this.data]
    const prevData = Object.assign(this.data[id])
    updatedData[id] = {
      text: prevData.text,
      isCompleted: !prevData.isCompleted,
    }
    this.setState(updatedData)
  }

  const handleDelete = id => {
    const updatedData = [...this.data]
    updatedData.splice(id, 1)
    this.setState(updatedData)
  }

  const handleInput = item => {
    const updatedData = [...this.data, { text: item, isCompleted: false }]
    this.setState(updatedData)
  }

  // 질문용 코드입니다.
  /*
  const handleInput = function(item) {
    const newItem = { text: item, isCompleted: false }
    data.push(newItem)
    this.todoList.setState(data)
  }.bind(this)
  */

  this.getTodoCountData = function(data) {
    return {
      totalCount: data.length,
      completedCount: data.filter(item => item.isCompleted).length,
    }
  }

  this.setState = function(newData) {
    try {
      this.todoCount.setState(this.getTodoCountData(newData))
      this.todoList.setState(newData)
      this.data = newData
    } catch (e) {
      console.log(e)
      return
    }
  }

  this.render = function() {
    const $todoCount = document.querySelector(`#${this.todoCountId}`)
    const $todoList = document.querySelector(`#${this.todoListId}`)
    const $todoInput = document.querySelector(`#${this.todoInputId}`)

    try {
      this.todoCount = new TodoCount({
        $element: $todoCount,
        data: this.getTodoCountData(this.data),
      })

      this.todoList = new TodoList({
        $element: $todoList,
        data: this.data,
        onClickItem: handleClickItem,
        onDelete: handleDelete,
      })

      new TodoInput({
        $element: $todoInput,
        onInput: handleInput,
      })
    } catch (e) {
      console.log(e)
      return
    }
  }

  this.render()
}

export default App
