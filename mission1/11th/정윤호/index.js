import { $ } from '../utils/dom.js'
import TodoList from './components/todoList.js'

const data1 = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const data2 = [
  {
    text: '머리 흰색으로 염색하기',
    isCompleted: true,
  },
  {
    text: '기타 배우기',
    isCompleted: true,
  },
]

const data3 = [
  {
    text: '안드로이화 하기',
    isCompleted: true,
  },
  {
    text: '굽신굽신 하기',
    isCompleted: true,
  },
  {
    text: '팀장님 존경하기',
    isCompleted: false,
  },
]

const newData = [
  {
    text: '수정하기',
    isCompleted: false,
  },
]

const todoList1 = new TodoList($('#todo-list1'), data1)
const todoList2 = new TodoList($('#todo-list2'), data2)
const todoList3 = new TodoList($('#todo-list3'), data3)

todoList1.render()
todoList2.render()
todoList3.render()

setTimeout(() => {
  todoList3.setState(newData)
}, 3000)
