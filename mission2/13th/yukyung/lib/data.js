const todoData1 = [
  {
    id: Math.random().toString(),
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    id: Math.random().toString(),
    text: 'JS 복습하기',
    isCompleted: false,
  },
  {
    id: Math.random().toString(),
    text: '치즈돈까스 먹기',
    isCompleted: false,
  },
  {
    id: Math.random().toString(),
    text: '예쁜 컵 사기',
    isCompleted: false,
  },
]

const todoData2 = [
  {
    text: '영어숙제하기',
    isCompleted: true,
  },
  {
    text: '숨쉬기',
    isCompleted: true,
  },
]

const todoData3 = [
  {
    text: '잠잘자기',
    isCompleted: false,
  },
  {
    text: '샐러드먹기',
    isCompleted: false,
  },
]

const newTodoData = [
  ...todoData3,
  {
    text: '칼퇴하기',
    isCompleted: true,
  },
  {
    text: 'Day1 영어단어 외우기',
    isCompleted: false,
  },
]

export { todoData1, todoData2, todoData3, newTodoData }
