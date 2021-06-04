import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'

class App {
  constructor($app, initialData) {
    if(!$app) throw new Error('$app이 없습니다')

    this.todoList = new TodoList({ $app, todoItems: initialData })

    new TodoInput({ $app, onSubmit: this.onTodoInputSubmit.bind(this) })
  }

  onTodoInputSubmit(text) {
    this.todoList.addTodoItem(text)
  }
}

export default App
