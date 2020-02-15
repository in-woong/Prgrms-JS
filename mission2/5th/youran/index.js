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
  const $todoInput = document.querySelector('#todo-input');
  $todoInput.addEventListener('keyup',function(e) {
    if(e.keyCode !== 13) return;
    data.push({
      text: e.target.value,
      isCompleted: false,
    });
    $todoList.setState(data);
    e.target.value = '';
  })
}catch(e) {
  console.log(e.message);
}
