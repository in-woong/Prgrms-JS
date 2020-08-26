import TodoClass from './TodoClass.js'
import TodoFunction from './TodoFunction.js'
import { todos, fruits, animals, wrongData } from './Data.js'

const todoList = new TodoFunction(document.querySelector('#todo-list'), todos)
const fruitList = new TodoClass(document.querySelector('#fruit-list'), fruits)
const animalList = new TodoFunction(
  document.querySelector('#animal-list'),
  animals
)

animalList.setState(wrongData)
