import { saveTodoListDataToLocalStorage } from './localStorage.js';
function TodoList(todoListData, todoListElem, todoCount){
      
  if(!(this instanceof TodoList)){
    // !new.target으로도 검사가 가능하다
    // new를 통해 생성하지 않고 TodoList를 호출할 경우 this가 window 객체가 된다.
    throw new Error('new를 통해 생성해주세요');
  }

  if(todoListData == null) {
    // data가 null, undefined인 경우
    throw new Error("데이터가 존재하지 않습니다");
  }
  
  if(!Array.isArray(todoListData)){
    // data가 배열이 아닌 경우
    throw new Error("배열을 입력해주세요");
  } 
  
  // data 내부 검사
  todoListData.forEach(obj => {
    if(!obj.hasOwnProperty('text')) {
      // data 내부의 객체가 text를 key로 가지고 있지 않은 경우 
      throw new Error('text가 객체에 존재하지 않습니다.');
    }

    if(!obj.hasOwnProperty('isCompleted')) {
      // data 내부의 객체가 isCompleted를 key로 가지고 있지 않은 경우 
      throw new Error('isCompleted가 객체에 존재하지 않습니다.');
    }

    if(typeof obj.text !== 'string') {
      // text를 key로 가지고 있으나 문자열이 아닌 경우
      throw new Error('text가 string 형태가 아닙니다.');
    }

    if(typeof obj.isCompleted !== 'boolean'){
      // isCompleted를 key로 가지고 있으나 boolean이 아닌 경우
      throw new Error('isCompleted가 boolean 형태가 아닙니다.');
    }
  });

  // 이벤트 위임을 사용해서 할 일 목록의 삭제 버튼을 눌렀는지, 아니면 텍스트를 눌렀는지 확인해서 분기 처리
  todoListElem.addEventListener('click', e => {
    const childElem = e.target;
    const parentElem = childElem.parentElement;
    if(parentElem.classList.contains('todo-item') ) {
      // 부모의 클래스가 todo-item을 가지는 경우, todoList에서 몇번째인지 확인한다.
      let todoListIndex;
      for(let i = 0; i < todoListElem.childNodes.length; i++){
        if(todoListElem.childNodes[i] === parentElem) {todoListIndex = i; break;}
      }
  
      if(childElem.classList.contains('todo-text')){
        // text만 눌렀을 경우 해당 data의 isCompleted가 false인지를 확인하여 삭선 처리를 해준다.
        if(!todoListData[todoListIndex].isCompleted){
          todoListData[todoListIndex].isCompleted = true;
          saveTodoListDataToLocalStorage(todoListData);
          childElem.innerHTML = `<s>${childElem.innerText}</s>`;
          // 완료처리가 되면 todoCount를 다시 그려줘야한다.
          todoCount.render(todoListData);
        }
      } else if(childElem.classList.contains('todo-remove-button')){
        // 삭제 버튼을 눌렀을 경우 해당 data를 todoListData에서 삭제한다.
        const deletedTodo = todoListData.splice(todoListIndex,1);
        saveTodoListDataToLocalStorage(todoListData);
        this.setState(todoListData);
        
        // 삭제가 될 요소의 isCompleted가 true 였다면 todoCount를 다시 그려줘야한다.
        if(deletedTodo[0].isCompleted) todoCount.render(todoListData);
      }
    }
  })

  this.render = todoListData => {
    // 삭제하기 쉽게 id에 번호를 새겨놓음
    todoListElem.innerHTML = todoListData.reduce((acc, {text, isCompleted}, index) =>  acc + 
      `<li class="todo-item">
        <span class="todo-text">
          ${isCompleted? `<s>${text}</s>` : text}
        </span> 
        <button class="todo-remove-button">삭제</button>
      </li>`, '');

  };

  this.setState = nextData => {
    this.render(nextData);
  };
};


export { TodoList };