import TodoList1 from './TodoList1.js'
import TodoList2 from './TodoList2.js'
import { data1, data2, data3 } from './data.js'

const todoList1 = new TodoList1(data1, 'todo-list1')
const todoList2 = new TodoList1(data2, 'todo-list2')
const todoList3 = new TodoList1(data3, 'todo-list3')

todoList1.render()
todoList2.render()
todoList3.render()

const todoList4 = new TodoList2(data1, 'todo-list1')
const todoList5 = new TodoList2(data2, 'todo-list2')
const todoList6 = new TodoList2(data3, 'todo-list3')

todoList4.render()
todoList5.render()
todoList6.render()
