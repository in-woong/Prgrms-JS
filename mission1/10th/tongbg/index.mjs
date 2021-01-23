import TodoList from './TodList.js'

const todoData = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const taskData = [
  {
    text: '라벨지 수정하기',
    isCompleted: true,
  },
  {
    text: 'BUSTSP01 배포하기',
    isCompleted: false,
  },
]

const shoppingData = [
  {
    text: '애호박',
    isCompleted: true,
  },
  {
    text: '짜요짜요',
    isCompleted: false,
  },
]

const todoList = new TodoList(todoData, 'todo-list')
new TodoList(taskData, 'task-list')
new TodoList(shoppingData, 'shopping-list')

// 변경할 데이터
const nextData = [
  {
    text: 'TypeScript 공부하기',
    isCompleted: true,
  },
  {
    text: 'TypeScript 복습하기',
    isCompleted: false,
  },
]

// 데이터변경 하면서 render
todoList.setState(nextData)
