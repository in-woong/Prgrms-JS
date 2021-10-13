import TodoList from "./TodoList.js";
      
const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const dayData = [
  {
    text: '일찍 자기',
    isCompleted: false,
  },
  {
    text: '일찍 일어나기',
    isCompleted: false,
  }
]

const monthData = [
  {
    text: '스터디',
    isCompleted: false,
  },
  {
    text: '프로젝트',
    isCompleted: true,
  }
]

const todoList = new TodoList(document.getElementById("todo-list"), data)
const todoListDay = new TodoList(document.getElementById("todo-list-day"), dayData)
const todoListMonth = new TodoList(document.getElementById("todo-list-month"), monthData)

todoList.setState([
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: true,
  },
])
