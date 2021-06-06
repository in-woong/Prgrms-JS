import dataValidation from '../../utils/DataValidation.js';

function TodoList(data,selector){
  // new 키워드로 생성하지 않은 경우
  const todoListElem =selector;

  if(!new.target){
    throw new Error('new 키워드를 통해서 생성해주세요.');
  };

  dataValidation(data);      

  this.data = data;

  this.render = () => {
    todoListElem.innerHTML = this.data.map(todoItem => todoItem.isCompleted ? `<li><s>${todoItem.text}</s></li>` :`<li>${todoItem.text}</li>`).join('');
  };

  this.setState = (nextData) => {
    dataValidation(nextData);        
    this.data = nextData;
    this.render();
  }
  
  this.render();
};


export default TodoList;