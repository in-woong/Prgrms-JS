import validateData from "./validateData.js"

function TodoList(data){
  // new 키워드
  // 함수 또는 생성자가 new 연산자로 호출된 여부 확인
  // Class 정보에 접근 가능
  if(validateData(new.target, data)){
    this.data = data;
  }
}

TodoList.prototype.render = function(){
  document.querySelector('#todo-list').innerHTML = this.data.map((item)=>{
    return `<div>${item.text}</div>`;
  }).join('');
}

export default TodoList;
