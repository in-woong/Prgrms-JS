const todos = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
  // {
  //   errorText: 'dummyData'
  // },
  // {
  //   text: 1
  // }
]
const dailyTodos = [
  {
    text: '매일매일 공부하고 기록 남기기',
    isCompleted: true,
  },
  {
    text: '야식 먹지 않기',
    isCompleted: false,
  },
  {
    text: 'CS & JS & REACT 공부',
    isCompleted: true,
  },
  {
    text: '취업 준비중',
    isCompleted: false,
  },
]

const reactTodos = [
  {
    text: '컴포넌트 설계 공부',
    isCompleted: true,
  },
  {
    text: '효과적으로 상태 관리 하기',
    isCompleted: false,
  },
  {
    text: 'Contenxt API 활용 해보기',
    isCompleted: true,
  },
  {
    text: '리덕스 연동 하기',
    isCompleted: true,
  },
  {
    text: '리덕스 사가 공부',
    isCompleted: false,
  },
]

const updateTodos = [
  {
    text: '클로져 복습',
    isCompleted: true,
  },
  {
    text: 'this 개념 복습',
    isCompleted: false,
  },
]

const todoList = new TodoList(todos, 'todo-list')

todoList.render()

// setTimeout(function() {
//   todoList.setState(updateTodos);
// }, 3000);
