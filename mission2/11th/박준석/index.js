import { $, addNewTodoListDiv } from './utils.js'
import TodoList from './TodoList.js'

const data = [
  {
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
  {
    text: '                   JS 과제하기    ',
    isCompleted: true,
  }
]

const data2 = [
  {
    text: '게임하기',
    isCompleted: true,
  },
  {
    text: '축구하기',
    isCompleted: false,
  },
  {
    text: '독서하기',
    isCompleted: true,
  }
]

const data3 = [
  {
    text: '밥',
    isCompleted: false,
  },
  {
    text: '라면',
    isCompleted: true,
  },
  {
    text: '치킨',
    isCompleted: false,
  }
]

const test = new TodoList(data, '#todo-list');
const test2 = new TodoList(data2, '#play-list')
const test3 = new TodoList(data3, '#food-list')

// setTimeout(() => {
//   test3.setState(data)
// }, 3000)