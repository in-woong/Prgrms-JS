import InputField from './InputField.js'
import TodoList from './TodoList.js'
import * as data from '../data/index.js'

const App = () => {
  document.addEventListener('removeAll', (e) => {
    const typeTodoListMap = {
      todoListDay,
      todoListWeek,
      todoListMonth,
    }
    typeTodoListMap[e.detail.todoListType].setState([])
  })

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
    todoList: 'todoListDay',
  })
  const weekInputComponent = new InputField({
    domId: '#input-for-week',
    onSubmit: onSubmitWeek,
    todoList: 'todoListWeek',
  })
  const monthInputComponent = new InputField({
    domId: '#input-for-month',
    onSubmit: onSubmitMonth,
    todoList: 'todoListMonth',
  })
}

export default App
