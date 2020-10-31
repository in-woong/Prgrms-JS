import TodoList from './TodoList.js'
import * as Data from './data.js'

const todoList = new TodoList({ data: Data.data, domId: '#todo-list' })
const todoListWeek = new TodoList({
  data: Data.dataWeek,
  domId: '#todo-list-week',
})
const todoListMonth = new TodoList({
  data: Data.dataMonth,
  domId: '#todo-list-month',
})

todoList.render()
todoListWeek.render()
todoListMonth.render()

todoList.setState(Data.newData)
