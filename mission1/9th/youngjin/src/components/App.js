import InputField from './InputField.js'
import TodoList from './TodoList.js'
import * as data from '../data/index.js'

const App = ({ domElement }) => {
  domElement.innerHTML = `<div id="input-component" class="input-component"></div>
  <ul id='todo-component' class='todo-component'></ul>`

  const todoList = new TodoList({
    data: data.dataDefault,
    domElement,
  })

  new InputField({
    domElement,
    onSubmit: (value) => todoList.addData(value),
  })

  domElement.addEventListener('removeAll', (e) => {
    todoList.setState([])
  })
}

export default App
