function App() {
  const TODO_LIST_SELECTOR = '#todo-list'
  const TODO_INPUT_SELECTOR = '#todo-input'
  const TODO_COUNT_SELECTOR = '#todo-count'

  this.initialize = () => {
    this.data = getData()
    try {
      this.todoList = new TodoList(
        this.data,
        TODO_LIST_SELECTOR,
        deleteTodo,
        setTodoCompleted
      )
      this.todoCount = new TodoCount(this.getTodoCount(), TODO_COUNT_SELECTOR)
      this.todoInput = new TodoInput(TODO_INPUT_SELECTOR, insertTodo)
    } catch (error) {
      showErrorMessage(error)
      return
    }
  }

  this.setState = nextData => {
    try {
      isValidData(nextData)
      this.data = nextData
      this.todoList.setState(this.data)
      this.todoCount.setState(this.getTodoCount())
    } catch (error) {
      console.log(error)
    }
  }

  this.getTodoCount = () => {
    return {
      total: this.data.length,
      completed: this.data.filter(item => item.isCompleted).length,
    }
  }

  const insertTodo = newTodoText => {
    const nextData = this.data
    nextData.push({
      id: (this.data.length + 1).toString(),
      text: newTodoText,
      isCompleted: false,
    })
    this.setState(nextData)
  }

  const deleteTodo = todoId => {
    const nextData = this.data.filter(item => item.id !== todoId)
    this.setState(nextData)
  }

  const setTodoCompleted = todoId => {
    const nextData = this.data
    const index = nextData.findIndex(item => item.id === todoId)
    nextData[index].isCompleted = true
    this.setState(nextData)
  }

  this.initialize()
}

const getData = function() {
  return [
    {
      id: '1',
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      id: '2',
      text: 'JS 복습하기',
      isCompleted: false,
    },
  ]
}
