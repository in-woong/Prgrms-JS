import { data } from './TodoListData.js'
import TodoList from './TodoList.js'

const todoLists = new TodoList(data)
todoLists.render()
