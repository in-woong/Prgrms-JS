import InputField from './InputField.js'
import TodoList from './TodoList.js'

const TodoListModule = ({ domElement, dataId }) => {
  domElement.innerHTML = `<div id="input-component" class="input-component"></div>
  <ul id='todo-component' class='todo-component'></ul>`

  const data = getDataFromLocalStorage(dataId)

  const todoList = new TodoList({
    data,
    domElement,
    dataId,
  })

  new InputField({
    domElement,
    onSubmit: (value) => todoList.addData(value),
  })

  domElement.addEventListener('removeAll', (e) => {
    todoList.setState([])
  })
}

const getDataFromLocalStorage = (dataId) => {
  const stringData = localStorage.getItem(dataId)
  const data = stringData ? JSON.parse(stringData) : []
  return data
}

export default TodoListModule
