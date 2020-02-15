const data = [
  {
    id: '1',
    text: 'JS 공부하기',
    isCompleted: true
  },
  {
    id: '2',
    text: 'JS 복습하기',
    isCompleted: false
  }
]

try{
  const $todoList = new TodoList(data,'todo-list');  
  const $todoInput = document.querySelector('#todo-input');
  $todoInput.addEventListener('keyup',function(e) {
    if(e.keyCode !== 13) return;
    if(!e.target.value) return;
    $todoList.insertTodo(e.target.value);
    e.target.value = '';
  })
}catch(e) {
  console.log(e.message);
}
