import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import TodoInput from './TodoInput.js'

class App {
  constructor($app, initialData) {
    if(!$app) throw new Error('$app이 없습니다')
    this.validateTodoItems(initialData)

    this.state = {
      todoItems: initialData
    }

    this.todoList = new TodoList({
      $parent: $app,
      todoItems: this.state.todoItems,
      onDeleteBtnClick: this.deleteTodoItem.bind(this),
      onTodoTextClick: this.markCompletedTodoItem.bind(this),
    })

    this.todoCount = new TodoCount({
      $parent: $app,
      todoItems: this.state.todoItems,
    })

    new TodoInput({ $parent: $app, onSubmit: this.addTodoItem.bind(this) })
  }

  setState(nextState) {
    this.validateTodoItems(nextState.todoItems)

    this.state = nextState
    this.render()
  }

  render() {
    this.todoList.setState(this.state.todoItems)
    this.todoCount.setState(this.state.todoItems)
  }

  addTodoItem(text) {
    this.setState({
      todoItems: [...this.state.todoItems, { text, isCompleted: false }]
    })
  }

  deleteTodoItem(index) {
    const nextTodoItems = [...this.state.todoItems]
    nextTodoItems.splice(index, 1)

    this.setState({ todoItems: nextTodoItems })
  }

  markCompletedTodoItem(index) {
    const nextTodoItems = [...this.state.todoItems]
    nextTodoItems[index].isCompleted = true

    this.setState({ todoItems: nextTodoItems })
  }

  validateTodoItems(todoItems) {
    if(!Array.isArray(todoItems)) throw new Error(`${JSON.stringify(todoItems)} is not an Array`)

    todoItems.forEach(item => {
      if(item === null || typeof item !== "object") throw new Error(`data includes item '${item}'`)

      // properties
      if(!item.hasOwnProperty("text") || !item.hasOwnProperty("isCompleted"))
        throw new Error(`${JSON.stringify(item)} should have property 'text' and 'isCompleted'`)
        
      if(typeof item.text !== "string") throw new Error(`'text' in ${JSON.stringify(item)} is not string`)
      if(typeof item.isCompleted !== "boolean") throw new Error(`'isCompleted' in ${JSON.stringify(item)} is not boolean`)
    })
  }
}

export default App
