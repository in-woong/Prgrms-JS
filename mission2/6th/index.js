import TodoList from './src/todoList.js'
import * as datas from './src/todoData.js'
import { updateData } from './utils/utils.js'

const data = datas.data
const data2 = datas.data2
const data3 = datas.data3

const todoList = new TodoList('#todo-list1', data)
todoList.render()
setTimeout(() => {
  todoList.setState([{ text: '새로운 할 일 ', isCompleted: false }])
  console.log(todoList.data)
}, 2000)

const todoList2 = new TodoList('#todo-list2', data2)
todoList2.render()

const todoList3 = new TodoList('#todo-list3')
todoList3.render()
