import dataValidation from '../../utils/DataValidation.js';

function TodoList(todoList,$app,changeCompletedTodoCount){
  // new 키워드로 생성하지 않은 경우
  if(!new.target){
    throw new Error('new 키워드를 통해서 생성해주세요.');
  };
  dataValidation(todoList);      

  const todoListElem =document.createElement('div');
  todoListElem.classList.add('todo__list__wrapper');
  $app.appendChild(todoListElem);
  
  this.$target = todoListElem;
  this.todoList = todoList;

  this.render = () => {
    this.$target.innerHTML = this.todoList.map(todoItem => 
      {
       return `<div class="todoItem-${todoItem.todoId} todo__item__wrapper"> 
               <li class="todo__item ${todoItem.isCompleted ? 'completed':'' }" data-value=${todoItem.todoId}>${todoItem.text} </li>
               <span data-value=${todoItem.todoId} class="delete__todo">삭제하기</span></div>`
      }).join('');
  };


  this.todoItemCheckHandler = (e)=> {
    
    // event delegation - toggle complete state
    if(e.target.classList.contains('todo__item')){
      const itemId = e.target.dataset.value;
      this.todoList = this.todoList.map(todoItem => {
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
      const removeItem = document.querySelector(`.todoItem-${itemId}`);
      removeItem.classList.add('remove');
      this.todoList = this.todoList.filter(todoItem => todoItem.todoId != itemId);
      setTimeout(()=>{
        removeItem.remove();
      },500)
    }
    changeCompletedTodoCount(this.todoList);
  }

  this.$target.addEventListener('click',this.todoItemCheckHandler);
  
  
  this.setState = (nextData) => {
    dataValidation(nextData);        
    this.todoList = nextData;
    this.render();
  }


  this.render();
};


export default TodoList;