import storage from './storage.js'
import TodoCount from './TodoCount.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'

const TODOS_STORAGE_KEY = 'todos'

const TODOLIST = 'todo'

export default function App({ $target }) {
  this.data = storage.getItem(TODOLIST, [])
  this.$target = $target

  window.addEventListener('RemoveAll', () => {
    const newData = []
    this.setState(newData)
  })

  this.render = () => {
    this.todoinput = new TodoInput({
      $target,
      onAddTodo: ($input) => {
        this.setState([
          {
            id: Date.now().toString(),
            text: $input.value,
            isCompleted: false,
          },
          ...this.data,
        ])
      },
    })
    this.todolist = new TodoList({
      $target,
      initialData: this.data,
      onTodoClick: (index) => {
        const newData = [...this.data]
        newData[index].isCompleted = !this.data[index].isCompleted
        this.setState(newData)
      },
      onTodoRemove: (index) => {
        const newData = this.data.filter((_, i) => i != index)
        this.setState(newData)
      },
    })
    this.todoCount = new TodoCount({
      $target,
      initialData: {
        totalCount: this.data,
        completedCount: this.data.filter((item) => item.isCompleted).length,
      },
    })
  }
  this.setState = (newData) => {
    storage.setItem(TODOLIST, newData)
    console.log(storage.getItem(TODOLIST, []))
    this.data = newData
    this.todolist.setState(newData)
    this.todoCount.setState({
      totalCount: newData,
      completedCount: newData.filter((item) => item.isCompleted).length,
    })
  }

  const todoList = new TodoList({
    $target,
    initialState: this.state,
    onTodoClick: (index) => {
      const nextState = [...this.state]
      nextState[index].isCompleted = !nextState[index].isCompleted
      this.setState(nextState)
    },
    onTodoRemove: (index) => {
      const nextState = this.state.filter((_, i) => i !== index)

      this.setState(nextState)
    },
  })

  const todoCount = new TodoCount({
    $target,
    initialState: {
      totalCount: this.state.length,
      completedCount: this.state.filter((todo) => todo.isCompleted).length,
    },
  })

  this.setState = (nextState) => {
    // nextState에 대한 validation
    storage.setItem(TODOS_STORAGE_KEY, nextState)
    this.state = nextState

    todoList.setState(nextState)
    todoCount.setState({
      totalCount: this.state.length,
      completedCount: this.state.filter((todo) => todo.isCompleted).length,
    })
  }
}
