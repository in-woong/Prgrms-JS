export default function TodoList($app, {state, tag}) {  // TodoList 컴포넌트 #75
  this.items = state;
  this.tag = tag;
  
  if(!new.target) throw new Error("error message: new로 호출하지 않았습니다."); // 생성시에만 검사

  this.checkState = () => { // 알맞은 데이터인지 검사
    if(!Array.isArray(this.items)) {
      throw new Error(`error message: 배열이 아닙니다`);
    }
    for(const { text, isCompleted } of this.items) {
      if(typeof text !== 'string') throw new Error("error message: text 속성이 없는 원소가 있습니다.");
      if(typeof isCompleted !== 'boolean') throw new Error("error message: isCompleted 속성이 없는 원소가 있습니다.");
    }
    return true;
  }

  this.checkTag = () => { // 존재하는 태그인지 검사
    return $app.querySelectorAll(`${this.tag}`) !== null;
  }

  this.getTodoListTag = () => {  // 전체 todo 태그 만들기
    const ul = document.createElement('ul');
    for(const {text, isCompleted, id} of this.items) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      const deleteBtn = document.createElement('button');
      
      li.id = id;
      span.innerText = text;
      deleteBtn.innerText = '삭제';
  
      if(isCompleted) span.classList.add('Done');
      li.appendChild(span);
      li.appendChild(deleteBtn);
      ul.appendChild(li);
    }
    ul.addEventListener('click', changeTodo);
    return ul;
  }

  this.render = () => {
    if(this.checkState() && this.checkTag()) {
      const $app = document.querySelector(`#${this.tag}`);
      while($app.hasChildNodes()) {$app.removeChild($app.firstChild);}
      $app.appendChild(this.getTodoListTag());
    }
  }

  this.setState = (nextData = this.items, nextTag = this.tag) => {
    this.items = nextData;
    this.tag = nextTag;
    this.render();
  }

  function changeTodo(event) {  // 전체 todo에서 받은 이벤트 처리
    const clickedTag = event.target.tagName;
    const clickedTagId = event.target.parentElement.id;
    if(clickedTag === 'SPAN') { // todo 삭선 요청인 경우
      toggleCompleted(event);
      $app.dispatchEvent(new CustomEvent('ToggleTodoEvent', {detail: clickedTagId}));
    } else if(clickedTag === 'BUTTON') {  // todo 삭제 요청인 경우
      deleteTodo(event);
      $app.dispatchEvent(new CustomEvent('DeleteTodoEvent', {detail: clickedTagId}));
    }
  }

  function toggleCompleted(event) {
    event.target.classList.toggle('Done');
  }

  function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
  }

  this.render();
}