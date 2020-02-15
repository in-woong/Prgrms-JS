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
    data.push({
      id: data.length + 1 + '',
      text: e.target.value,
      isCompleted: false,
    });
    $todoList.setState(data);
    e.target.value = '';
  })
}catch(e) {
  console.log(e.message);
}
