let data = [
  {
    text: 'mission2 복습하기',  // 할 일 이름
    isCompleted: true, // 완료 여부
  }
]

const todoList = new TodoList(data, document.querySelector("#todoList") );

