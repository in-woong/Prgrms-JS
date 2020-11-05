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
]
const newData = [
  {
    text: 'CSS 공부하기',
    isCompleted: true,
  },
  {
    text: 'CSS 복습하기',
    isCompleted: true,
  },
]
const inProgressive = [
  {
    text: '코딩테스트 공부하기',
    isCompleted: false,
  },
  {
    text: '자바스크립트 공부하기',
    isCompleted: false,
  },
]
const done = [
  {
    text: '인턴 지원하기',
    isCompleted: true,
  },
  {
    text: '자바스크립트 스터디 신청하기',
    isCompleted: true,
  },
]

const todoList = new TodoList(data, "todo-list");
todoList.setState(newData)

const inProgressiveList = new TodoList(inProgressive, "in-progressive-list");

const doneList = new TodoList(done, "done-list");
