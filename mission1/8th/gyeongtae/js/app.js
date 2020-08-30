import TodoList from './TodoList.js'
import { data, data2, data3, data4, data5 } from './data.js'

const todolist = new TodoList('#todo-list', data)
const todolist2 = new TodoList('#todo-list2', data2)
const todolist3 = new TodoList('#todo-list3', data3)
// todolist.render()
// todolist2.render()
// todolist3.render()
todolist.setState(data5)
todolist2.setState(data2)
todolist3.setState(data)
//alert('hi')
//alert('hi')
//alert('hi')
