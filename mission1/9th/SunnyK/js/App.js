import TodoList1 from './TodoList1.js'
import TodoList2 from './TodoList2.js'
import { data1, data2, data3, nextData } from './data.js'

const todoList1 = new TodoList1(data1, 'todo-list1')
new TodoList1(data2, 'todo-list2')
new TodoList1(data3, 'todo-list3')

setTimeout(() => todoList1.setState(nextData), 1000)


new TodoList2(data1, 'todo-list1')
new TodoList2(data2, 'todo-list2')
const todoList2 = new TodoList2(data3, 'todo-list3')

setTimeout(() => todoList2.setState(nextData), 1000)

