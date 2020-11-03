import TodoList from './src/TodoList.js'
import * as data from './src/data.js'

const todoList = new TodoList({ data: data.dataDefault, domId: '#todo-list' })
const todoListWeek = new TodoList({
  data: data.dataWeek,
  domId: '#todo-list-week',
})
const todoListMonth = new TodoList({
  data: data.dataMonth,
  domId: '#todo-list-month',
})

todoList.render()
todoListWeek.render()
todoListMonth.render()

todoList.setState(data.newData)
