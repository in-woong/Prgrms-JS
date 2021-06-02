import TodoList from './TodoList.js'

const data = [
  {
    text: 'JS 예습하기',
    isCompleted: true,
  },
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const goals = [
  {
    text: '모든 Mission1 해결하기',
    isCompleted: false,
  },
  {
    text: '주말안에 Mission 해결하기',
    isCompleted: false,
  },
  {
    text: '마크업 문서 읽고 정리하기',
    isCompleted: false,
  },
]

const appointments = [
  {
    text: '6/5 등산',
    isCompleted: false,
  },
  {
    text: 'clubhouse 모임 참여',
    isCompleted: false,
  },
  {
    text: '서울 나들이',
    isCompleted: false,
  },
]

const tempArr = [
  {
    text: '변해라!',
    isCompleted: true,
  },
  {
    text: '변했니?',
    isCompleted: false,
  },
  {
    text: '체크해',
    isCompleted: false,
  },
  {
    text: '디버깅도 해봐',
    isCompleted: false,
  },
]
// 나중에 사용하기 위해 todo1 변수를 만들어서 저장함
const todo1 = new TodoList(data, 'todo-list')
const todosOfGoal = new TodoList(goals, 'todo-goal')
const todosOfAppointment = new TodoList(appointments, 'todo-appointment')
todo1.setState(tempArr)
