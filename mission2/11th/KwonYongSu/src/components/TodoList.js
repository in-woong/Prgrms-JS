import dataValidation from '../../utils/DataValidation.js';

function TodoList(data,$app){
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
    console.log(this.$todoItems)
    this.$target.innerHTML = this.$todoItems.map((todoItem,index) => `<li class="todo__item" data-value=${index}>${todoItem.isCompleted ? '완료' : '미완료'} ${todoItem.text}</li>`).join('');
  };


  const todoItemCheckHandler = (e)=> {
    if(e.target.classList.contains('todo__item')){
      const itemId = e.target.dataset.value;
      this.$todoItems = this.$todoItems.map((todoItem,index) => {
        if(index == itemId){
          todoItem.isCompleted = !todoItem.isCompleted;
        }
        return todoItem;
      });
      this.render();
    }
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