const TodoList = function({state, $target}) {
        
  this.state = state;
  this.$todoList = document.createElement('div');

  $target.appendChild(this.$todoList);


  this.render = function() {
      this.$todoList.innerHTML = `<ol>${this.state.map(task => task.isCompleted ? `<li><s>${task.text}</s></li>` : `<li>${task.text}</li>`).join('')}</ol>`;
    };   // 렌더링을 this.data 기준으로

  this.setState = function(nextState) {
    this.state = nextState;     // data 업데이트     유효성 검사와 리렌더링 모두 this.data가 기준, 바뀐 this.data에 맞추어 다시 검사하고 그리는 작업 수행
    this.validate();     //  data 유효성 검사
    this.render();      //  data 리렌더링
  }

  this.validate = function() {     // 기존 const validate 함수를 구현한 것에서 this.validate 메소드로 변경  -> 그냥 함수 선언 시 내부 this가 window로 묶임..
    const dataType = typeof(this.state);       // 메소드로 변경 후 this.data 기준으로 유효성 검사
    if (dataType !== typeof(Array()) || (dataType === null || dataType === undefined)) {   
      throw new Error(`inappreciate parameter used: current parameter type is ${dataType}`);
    }
    // 데이터 타입이 배열이 아니거나 null or undefined 일 때 에러 발생

    if (this.state.every(task => {!(task.hasOwnProperty('text') && task.hasOwnProperty('isCompleted'))})) {
        throw new Error("inappreciate parameter used: some data don't have appreciated property")
      }; 
  }
  // 파라미터 내에 text, isCompleted 프로퍼티들이 존재하는지 검사

  this.validate(); //  유효성 검사 실행

  if(this === window) {
    throw new Error("'new' keword was needed to create new instance");
  }
  // new 키워드 없이 함수 실행 시 에러 발생
}