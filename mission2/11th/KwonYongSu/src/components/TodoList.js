import dataValidation from '../../utils/DataValidation.js';

function TodoList(todoList,$app,changeCompletedTodoCount){
  // new 키워드로 생성하지 않은 경우
  if(!new.target){
    throw new Error('new 키워드를 통해서 생성해주세요.');
  };

  // 데이터의 유효성 검사
  dataValidation(todoList);      
  // evnet delegation을 위한 부모 껍대기를 생성한다.
  const todoListElem =document.createElement('div');
  todoListElem.classList.add('todo__list__wrapper');
  $app.appendChild(todoListElem);
  

  this.$target = todoListElem;
  this.todoList = todoList;

  this.render = () => {
    this.$target.innerHTML = this.todoList.map(todoItem => 
      {
       return `<div class="todoItem-${todoItem.todoId} todo__item__wrapper"> 
               <li class="todo__item ${todoItem.isCompleted ? 'completed':'' }" data-value=${todoItem.todoId}>${todoItem.text} <span class="todo__item__createdAt">${todoItem.createdAt}</span> </li>
               <span data-value=${todoItem.todoId} class="delete__todo">삭제하기</span></div>`
      }).join('');
  };


  // this.$target에 click 이벤트가 발생시 완료 처리인지 삭제 처리인지 판단하여 로직을 수행한다.
  this.todoItemCheckHandler = (e)=> {
    // event delegation - toggle complete state
    if(e.target.classList.contains('todo__item')){
      const itemId = e.target.dataset.value;
      // 눌러진 할 일의 isCompleted 속성을 변경한다.
      this.todoList = this.todoList.map(todoItem => {
        if(todoItem.todoId == itemId){
          todoItem.isCompleted = !todoItem.isCompleted;
        }
        return todoItem;
      });
      // 삭선 및 색상 변경을 위한 css 선택자 적용하였다.
      e.target.classList.toggle('completed');
    }
    
    // event delegation - delete function
    if(e.target.classList.contains('delete__todo')){
      const itemId = e.target.dataset.value;

      const removeItem = document.querySelector(`.todoItem-${itemId}`);
      // 사용자가 삭제한 것을 인지할 수 있도록 하기 위한 animation을 적용하기 위해서 간단한 css 선택자를 적용하였다.
      removeItem.classList.add('remove');
      // 기존 state의 데이터를 새롭게 갱신한다.
      this.todoList = this.todoList.filter(todoItem => todoItem.todoId != itemId);
      setTimeout(()=>{
        // DOM에서 선택된 할 일 요소를 삭제한다.
        // setTimeout을 적용한 것은 즉각 삭제시 삭제 animation을 보여줄 수 없기 때문에 animation 동작 시간 동안만 setTimeout을 적용하였다.
        removeItem.remove();
      },500)
    }
    // 완료 및 전체 목록 수의 변화가 있었기 때문에 즉각 반영해 준다.
    changeCompletedTodoCount(this.todoList);
  }

  this.$target.addEventListener('click',this.todoItemCheckHandler);
  
  // 새롭게 추가된 경우 데이터를 재 랜더링한다.
  this.setState = (nextData) => {
    dataValidation(nextData);        
    this.todoList = nextData;
    this.render();
  }
  this.render();
};


export default TodoList;