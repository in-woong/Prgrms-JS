export default function ($parent,  handleToggleDone, handleDeleteTodoItem){
  // TodoList의 DOM 요소 생성
  const $todoList = Object.assign(document.createElement('ul'), {className:'todo-list'});
  
  // 갱신된 todoList를 바탕으로 재 렌더링
  this.render = todoList => {
    $todoList.innerHTML = todoList.reduce((acc, {content, isCompleted}) =>  acc + 
      `<li class="todo-item">
        <span class="todo-text ${isCompleted? 'done' : ''}">
          ${content}
        </span> 
        <button class="todo-remove-button">삭제</button>
      </li>`, '');
  };
  
  // DOM 구축
  const buildDOM = () =>  $parent.appendChild($todoList);

  // 이벤트 리스너 부착
  const attachEventListeners = () => {
    // 이벤트 위임을 사용해서 할 일 목록의 삭제 버튼을 눌렀는지, 아니면 텍스트를 눌렀는지 확인해서 분기 처리
    $todoList.addEventListener('click', e => {
      const childElem = e.target;                     // e.target은 삭제 버튼 또는 텍스트를 가리킨다.
      const parentElem = childElem.parentElement;     // parentElem은 무조건 li태그를 가리킨다.

      const targetIndex = [...$todoList.childNodes].findIndex(listElem => parentElem === listElem);
      if(childElem.classList.contains('todo-text')){
        handleToggleDone(targetIndex);                // text만 눌렀을 경우 해당 data의 isCompleted를 확인하여 삭선 처리를 해준다.     
      } else if(childElem.classList.contains('todo-remove-button')){
        handleDeleteTodoItem(targetIndex);            // 삭제 버튼을 눌렀을 경우 해당 data를 todoListData에서 삭제한다. 
      }
    })
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  buildDOM();
  attachEventListeners();
};
