const todoList = new TodoList('#todo-list', data)
const newData = [
  {
    text: '스터디 과제하기',
    isCompleted: false,
  },
  {
    text: '엄마한테 전화하기',
    isCompleted: true,
  },
]
todoList.setState(newData)
