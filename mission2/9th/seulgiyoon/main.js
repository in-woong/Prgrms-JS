import { TodoList } from './TodoList.js'

export const data = [
  {
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

new TodoList('todo-list', data)
