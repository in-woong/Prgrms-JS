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

function TodoList({ data, elementId, onTodoClick, onRemoveClick }) {
  
  validateNewTarget(new.target);

  this.targetElementId = elementId;
  this.$target = document.querySelector(`#${this.targetElementId}`);
  
  validateElementId(this.targetElementId, this.$target)
  validateData(data);
  this.todoItems = data;

  this.createTodoItemRemoveBtnHtml = function() {
    return `<button class="remove-btn" type="button">삭제</button>`;
  }
  
  this.createTodoItemsListHtmlString = function() {
    
    return this.todoItems.map(({ text, isCompleted }, index) => 
        isCompleted ? 
          `<li data-index=${index} class="todo-item"><del class="todo-item-done">${text}</del>${this.createTodoItemRemoveBtnHtml()}</li>` : 
          `<li data-index=${index} class="todo-item">${text}${this.createTodoItemRemoveBtnHtml()}</li>`).join('');
  }

  this.render = () => {
      this.$target.innerHTML = `<h2>${this.targetElementId}</h2>
                                <ul id='${this.targetElementId}-ul'>${this.createTodoItemsListHtmlString()}</ul>`;
      this.bindEvent();
  }

  this.setState = (nextData) => {
      validateData(nextData);
      //app.js 에서 항상 새로운 객체를 생성해서 넘기기 때문에
      //json.stringify 검사 할 필요 없음. 
      //if(JSON.stringify(nextData) !== JSON.stringify(this.todoItems)){
      //같은 내용일 경우 렌더링 하지 않는 처리는 따로 필요
      if (nextData !== this.data){ 
        this.todoItems = nextData;
        this.render();
      }   
  }
  
  this.bindEvent = () => {
    const $ul = document.querySelector(`#${this.targetElementId}-ul`);
    $ul.addEventListener('click', (event) => {
      const { target } = event;
      if (target.className === 'todo-item') {
        const { index } = target.dataset;
        onTodoClick(parseInt(index));
      }
      if (target.className === 'todo-item-done') {
        const { index } = target.closest('.todo-item').dataset;
        onTodoClick(parseInt(index));
      }
      if (target.className === 'remove-btn') {
        const { index } = target.closest('.todo-item').dataset;
        onRemoveClick(parseInt(index));
      }
    });
  }

  this.render();
    
}
