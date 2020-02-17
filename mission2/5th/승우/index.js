//Data

//Input Data
var data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]
var data1 = [
  {
    text: '#50, #57 구현하기',
    isCompleted: true,
  },
  {
    text: '매일 Commit하기',
    isCompleted: false,
  },
  {
    text: '아메리카노 마시기',
    isCompleted: true,
  },
]

//setState용 data
var data3 = [
  {
    text: '다이어리 쓰기',
    isCompleted: true,
  },
  {
    text: '롤 하기',
    isCompleted: false,
  },
  {
    text: '노래방가기',
    isCompleted: false,
  },
]

//예외처리
// data가 빈 문자열일 경우
try {
  const todo = new TodoList('', 'todo-list')
  todo.render()
} catch (e) {
  console.log(e)
}

//data가 빈 배열일 경우
try {
  const todo = new TodoList([], 'todo-list')
  todo.render()
} catch (e) {
  console.log(e)
}

//데이터가 객체일 경우
try {
  const todo = new TodoList({ text: 'JS 복습하기' }, 'todo-list')
  todo.render()
} catch (e) {
  console.log(e)
}

//new 키워드 없이 함수 호출하는 것
try {
  const newTodo = TodoList(data, 'todo-list')
} catch (e) {
  console.log(e)
}

//정상 실행
try {
  const $target = document.getElementById('todo-list')
  const todo = new TodoList(data, $target)
  todo.setState(data3)
} catch (e) {
  console.log(e)
}

// const myTodo = new TodoList(data1, 'my-todo')

// const yourTodo = new TodoList(
//   [
//     {
//       text: '파스타 먹기',
//       isCompleted: false,
//     },
//     {
//       text: '햄버거먹기',
//       isCompleted: true,
//     },
//   ],
//   'your-todo'
// )

// yourTodo.setState([
//   {
//     text: '자소서 쓰기',
//     isCompleted: true,
//   },
//   { text: 'JS 공부하기', isCompleted: true },
//   {
//     text: '컴퓨터 포맷하기',
//     isCompleted: false,
//   },
// ])

// myTodo.setState(data3)
