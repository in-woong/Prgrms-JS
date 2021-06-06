import dataValidation from '../../utils/DataValidation.js';

function TodoList(data,$app,changeCompletedTodoCount){
  // new 키워드로 생성하지 않은 경우
  const todoListElem =document.createElement('div');
  
  $app.appendChild(todoListElem);

  if(!new.target){
    throw new Error('new 키워드를 통해서 생성해주세요.');
  };

  dataValidation(data);      
  
  this.$target = todoListElem;
  this.$todoItems = data;

  this.render = () => {
    this.$target.innerHTML = this.$todoItems.map(todoItem => `<div class="todoItem-${todoItem.todoId}"><li class="todo__item ${todoItem.isCompleted ? 'completed':'' }" data-value=${todoItem.todoId}>${todoItem.text} </li><span data-value=${todoItem.todoId} class="delete__todo">삭제하기</span></div>`).join('');
  };


  const todoItemCheckHandler = (e)=> {
    
    // event delegation - toggle complete state
    if(e.target.classList.contains('todo__item')){
      const itemId = e.target.dataset.value;
      this.$todoItems = this.$todoItems.map(todoItem => {
        if(todoItem.todoId == itemId){
          todoItem.isCompleted = !todoItem.isCompleted;
        }
        return todoItem;
      });
      e.target.classList.toggle('completed');
    }
    
    // event delegation - delete function
    if(e.target.classList.contains('delete__todo')){
      const itemId = e.target.dataset.value;
      document.querySelector(`.todoItem-${itemId}`).remove();
      this.$todoItems = this.$todoItems.filter(todoItem => todoItem.todoId != itemId);
    }
    changeCompletedTodoCount(this.$todoItems);
  }

  this.$target.addEventListener('click',todoItemCheckHandler);
  
  
  this.setState = (nextData) => {
    dataValidation(nextData);        
    this.$todoItems = nextData;
    this.render();
  }


  this.render();
};


export default TodoList;