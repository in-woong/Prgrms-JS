const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true
  },
  {
    text: 'JS 복습하기',
    isCompleted: false
  }
]

try{
  const $todoList = new TodoList(data,'todo-list');  
}catch(e) {
  console.log(e.message);
}
