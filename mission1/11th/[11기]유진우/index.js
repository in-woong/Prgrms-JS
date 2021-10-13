import TodoList from './todoList.js'

let data1 = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]
let data2 = [
  {
    text: '보너스 구현사항 완료하기',
    isCompleted: false,
  },
  {
    text: '세션2 보고 복습하기',
    isCompleted: true,
  },
]
let data3 = [
  {
    text: '면접 준비하기',
    isCompleted: true,
  },
  {
    text: '자기소개서 쓰기',
    isCompleted: false,
  },
]

const todoList = new TodoList(document.querySelector('#todo-list'), data1)
const todoListToday = new TodoList(document.querySelector('#todo-list2'), data2)
const todoListNextDay = new TodoList(document.querySelector('#todo-list3'), data3)

todoList.render()
todoListToday.render()
todoListNextDay.render()

setTimeout(() => {
  todoListToday.setState(data3)
}, 3000)
