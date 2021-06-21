import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'

const dummyData = [
  {
    _id: 1,
    content: 'JS 공부하기',
    isCompleted: true,
  },
  {
    _id: 2,
    content: 'JS 복습하기',
    isCompleted: false,
  },
]

class App {
  constructor($app) {
    new TodoInput({ $app, onSubmit: this.onTodoInputSubmit.bind(this) })

    this.todoList = new TodoList({ $app, initialState: dummyData })
  }

  onTodoInputSubmit(e) {
    e.preventDefault()

    const content = e.target.querySelector('#content').value
    const isCompleted = JSON.parse(e.srcElement.elements.isCompleted.value)

    console.log(content, isCompleted)
  }
}

export default App
