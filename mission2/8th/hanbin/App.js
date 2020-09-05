import TodoList from './Components/TodoList.js'
import TodoInput from './Components/TodoInput.js'

export default function App(data, $target) {

    this.todoInput = new TodoInput($target);
    this.todoList = new TodoList(data,$target);
 
}
