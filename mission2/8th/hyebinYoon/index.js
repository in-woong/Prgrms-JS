const todoData = [
  {
    text: '방 청소하기',
    isCompleted: false,
  },
  {
    text: '치과 예약하기',
    isCompleted: true,
  },
]

// 인스턴스 생성 및 render
const todoList = new TodoList(todoData, 'todo')
