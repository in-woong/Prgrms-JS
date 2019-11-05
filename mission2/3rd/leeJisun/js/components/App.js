import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import { TodoCount } from './TodoCount'

export const App = data => {
  // input
  const todoInput = new TodoInput(data)
  todoInput.setState(data)

  // todoList
  const todoList = new TodoList(data)
  todoList.setState(data)

  // count
  const todoCount = new TodoCount(data)
  todoCount.setState(data)
}
