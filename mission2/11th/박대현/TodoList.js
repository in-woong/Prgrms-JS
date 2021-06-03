function TodoList(data, todoListElem){
      
  if(!(this instanceof TodoList)){
    // !new.target으로도 검사가 가능하다
    // new를 통해 생성하지 않고 TodoList를 호출할 경우 this가 window 객체가 된다.
    throw new Error('new를 통해 생성해주세요');
  }

  if(data == null) {
    // data가 null, undefined인 경우
    throw new Error("데이터가 존재하지 않습니다");
  }
  
  if(!Array.isArray(data)){
    // data가 배열이 아닌 경우
    throw new Error("배열을 입력해주세요");
  } 
  
  // data 내부 검사
  data.forEach(obj => {
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

  
  this.data = data;
  this.todoListElem = todoListElem;

  this.render = todoListElem => {
    // 삭제하기 쉽게 id에 번호를 새겨놓음
    this.todoListElem.innerHTML = this.data.reduce((acc, {text, isCompleted}, index) =>  acc + 
        `<li id="todo-${index}" class="todo-item">
          <span class="todo-text">
            ${isCompleted? `<s>${text}</s>` : text}
          </span> 
          <button class="todo-remove-button">삭제</button>
        </li>`, '');

  };

  this.setState = nextData => {
    this.data = nextData; 
    this.render(this.todoListElem);
  };
};


export { TodoList };