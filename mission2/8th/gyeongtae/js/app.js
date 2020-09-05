import TodoList from './TodoList.js'
import { data, data2, data3, data4, data5 } from './data.js'

const todolist = new TodoList('#todo-list', data)
const todolist2 = new TodoList('#todo-list2', data2)
const todolist3 = new TodoList('#todo-list3', data3)

todolist.setState(data5)
todolist2.setState(data2)
todolist3.setState(data)
