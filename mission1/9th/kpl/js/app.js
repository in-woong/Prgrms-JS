import TodoList from './TodoList.js'
import { data, dataFood, dataTravel } from './data.js'

let todoList = new TodoList(data, 'todo-list')
let todoListFood = new TodoList(dataFood, 'todo-list-food')
let todoListTravel = new TodoList(dataTravel, 'todo-list-travel')

todoList.setState(data)
todoListFood.setState(dataFood)
todoListTravel.setState(dataTravel)
