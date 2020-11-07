import TodoList from './src/TodoList.js'
import InputField from './src/InputField.js'
import * as data from './src/data/index.js'

const todoListDay = new TodoList({
  data: data.dataDefault,
  domId: '#todo-list-day',
})
const todoListWeek = new TodoList({
  data: data.dataWeek,
  domId: '#todo-list-week',
})
const todoListMonth = new TodoList({
  data: data.dataMonth,
  domId: '#todo-list-month',
})

todoListDay.render()
todoListWeek.render()
todoListMonth.render()

todoListDay.setState(data.newData)

const onSubmitDay = (value) => todoListDay.addData(value)
const onSubmitWeek = (value) => todoListWeek.addData(value)
const onSubmitMonth = (value) => todoListMonth.addData(value)
const dayInputComponent = new InputField({
  domId: '#input-for-day',
  onSubmit: onSubmitDay,
})
const weekInputComponent = new InputField({
  domId: '#input-for-week',
  onSubmit: onSubmitWeek,
})
const monthInputComponent = new InputField({
  domId: '#input-for-month',
  onSubmit: onSubmitMonth,
})
