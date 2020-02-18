function App() {
  const TODO_LIST_SELECTOR = '#todo-list'
  const TODO_INPUT_SELECTOR = '#todo-input'
  const TODO_COUNT_SELECTOR = '#todo-count'
  const REMOVE_ALL_SELECTOR = '#remove-all-button'

  this.initialize = () => {
    this.data = getData()
    try {
      this.todoList = new TodoList({
        data: this.data,
        selector: TODO_LIST_SELECTOR,
        onDeleteTodo: deleteTodo,
        onSetTodoCompleted: setTodoCompleted,
        onRemoveAllTodo: removeAllTodo,
      })
      this.todoCount = new TodoCount({
        data: this.getTodoCount(),
        selector: TODO_COUNT_SELECTOR,
      })
      this.todoInput = new TodoInput({
        inputSelector: TODO_INPUT_SELECTOR,
        removeAllSelector: REMOVE_ALL_SELECTOR,
        onInsertTodo: insertTodo,
        eventTrigger: eventTrigger,
      })
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
      totalCount: this.data.length,
      completedCount: this.data.filter(item => item.isCompleted).length,
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

  const removeAllTodo = () => this.setState([])

  const eventTrigger = event => this.todoList.$todoList.dispatchEvent(event)

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
