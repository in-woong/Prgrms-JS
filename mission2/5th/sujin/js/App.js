import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'

let setData = []

function App(data, $el) {
     //너가 Todolist와 todoInput을 관리해야됌
    this.todoList = new TodoList(data, $el)
    this.todoInput = new TodoInput(this.todoList)

    this.render = function () {
        this.todoList.render() 
        this.todoInput.setup()
    }

    this.render()
}
export default App;