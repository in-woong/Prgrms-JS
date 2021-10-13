function TodoCount($app,todoItems){
  const todoCountWrapper = document.createElement('div');
  todoCountWrapper.classList.add('todo__count__wrapper');
  const todoCompleted = document.createElement('div'); 
  const todoUnCompleted = document.createElement('div'); 
  todoCountWrapper.appendChild(todoCompleted)
  todoCountWrapper.appendChild(todoUnCompleted)
  $app.appendChild(todoCountWrapper);
 
  // 주어진 데이터에서 완료된 목록의 수를 연산한다.
  this.countCompletedTodoItem = (todoItems) => {
    let compeletedTodoCount = 0;
    todoItems.map(todoItem => {
      if(todoItem.isCompleted){
        compeletedTodoCount++;
      };
    })
    todoCompleted.innerText ="완료된 목록: "+ compeletedTodoCount;
    todoUnCompleted.innerText ="전체 목록: " + todoItems.length;
  }
  this.countCompletedTodoItem(todoItems);
}

export default TodoCount;