(function(){
    const data = [
      {
        text: 'Todo List 01',
        isCompleted: false
      },
      {
        text: 'Todo List 02',
        isCompleted: false
      },
      {
        text: 'Todo List 03',
        isCompleted: false
      }
    ];

const todoList = new TodoList(data);

document.querySelector('#todoBtn').addEventListener('click', function(){
  let addItem = document.querySelector('#todoInput');
  todoList.append(addItem);
})


})();
