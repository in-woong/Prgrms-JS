import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import TodoInput from './TodoInput.js'
import RemoveAllButton from './RemoveAllButton.js'

class App {
  constructor($app) {
    if(!$app) throw new Error('$app이 없습니다')

    this.state = {
      todoItems: JSON.parse(localStorage.getItem('todoItems')) || [],
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

    new RemoveAllButton({ $parent: $app })

    $app.addEventListener('removeAll', this.deleteAllTodoItems.bind(this))
  }

  setState(nextState) {
    if(this.state.todoItems !== nextState.todoItems) {
      this.validateTodoItems(nextState.todoItems)

      this.setTodoItemsToLocal(nextState.todoItems)
    }
    
    this.state = nextState
    this.render()
  }

  render() {
    this.todoList.setState(this.state.todoItems)
    this.todoCount.setState(this.state.todoItems)
  }

  setTodoItemsToLocal(todoItems) {
    localStorage.setItem('todoItems', JSON.stringify(todoItems))
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

  deleteAllTodoItems() {
    this.setState({ todoItems: [] })
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
