import { todoData1 } from './lib/data.js'
import TodoList from './TodoList.js'

const TODO_PREFIX = '#todo-list'

const todoList1 = new TodoList(todoData1, TODO_PREFIX)
