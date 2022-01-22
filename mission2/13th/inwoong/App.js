import * as DataRepository from './src/data.js'
import TodoList from './src/Todolist.js'
import TodoInput from './src/TodoInput.js'

const todolist = new TodoList(DataRepository.data, 'todo-list')
const todoinput = new TodoInput(todolist, 'todo-list')
const donelist = new TodoList(DataRepository.done, 'done-list')
const doneinput = new TodoInput(donelist, 'done-list')
const buylist = new TodoList(DataRepository.buy, 'buy-list')
const buyinput = new TodoInput(buylist, 'buy-list')
todolist.setState([{ text: 'nothig', isCompleted: true }])