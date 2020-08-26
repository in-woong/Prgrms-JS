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
const toSellData = [
  {
    text: '금 1kg',
    isCompleted: false
  },
  {
    text: '은 9kg',
    isCompleted: true
  }
]
const toBuyData = [
  {
    text: '무풍 선풍기',
    isCompleted: true
  },
  {
    text: '느루아르 노트북',
    isCompleted: false
  }
]
function validateNewTarget(newTarget){

  if(!newTarget){
    throw new Error('new 키워드 사용해서 함수를 생성해 주세요~');
  }
}

function validateData(data){
    
  if(data === undefined || data === null){
    throw new Error('데이터가 undefined 또는 null 입니다.');
  }
  
  if(!Array.isArray(data)){
    throw new Error('데이터가 배열 형태가 아닙니다.');
  }
  
  if(data.some((elem) => !elem.text || typeof elem.text !== 'string') ){
    throw new Error('text 속성 자체가 없거나 text의 값이 문자열이 아닙니다.');
  }

  if(data.some((elem) => !elem.hasOwnProperty('isCompleted') || typeof elem.isCompleted !== 'boolean')){
    throw new Error('isCompleted 속성 자체가 없거나 속성의 값이 boolean 형태가 아닙니다.')
  }
}

function validateElementId(elementId, target){
  if( !elementId || !target ){
    throw new Error('target element id가 비었거나 element id가 유효하지 않습니다.');
  }
}

function TodoList(data,elementId) {
  
  this.targetElementId = elementId;
  this.$target = document.querySelector(`#${this.targetElementId}`);
  
  validateNewTarget(new.target);
  validateElementId(this.targetElementId, this.$target)
  validateData(data);

  this.todoItems = data;

  this.createTodoItemsListHtmlString = function(){
    
    return this.todoItems.map( 
      ({ text, isCompleted }) => isCompleted ? `<li><del>${text}</del></li>` : `<li>${text}</li>` )
      .join('');
  }

  this.render = function () {
      this.$target.innerHTML = `<h2>${this.targetElementId}</h2>
                                <ul>${this.createTodoItemsListHtmlString()}</ul>`;  
  }

  this.setState = function (nextData) {
      validateData(nextData);
      this.todoItems = nextData;
      this.render();
  }

  this.render();
}
try {
  const todoList = new TodoList(data,'todo-list');
  const tosellList = new TodoList(toSellData, 'tosell-list');
  const tobuyList = new TodoList(toBuyData, 'tobuy-list');
  const newData = [
      {
          text: 'new JS 공부하기',
          isCompleted: true
      },
      {
          text: 'new JS 복습하기',
          isCompleted: false
      }
  ];
  todoList.setState(newData);

} catch (error) {
  console.error(error);
}

