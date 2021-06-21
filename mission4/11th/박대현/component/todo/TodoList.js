export default function ($parent,  { handleToggleDone, handleDeleteTodoItem }){
  // todoList의 DOM 요소
  const elements  = {
    $todoList : Object.assign(document.createElement('ul'), {className:'todo-list'}),
  }
  
  // 관리하는 data를 바탕으로 render 해줄 함수
  const renders = {
    todoListRender : todoList => {
      elements.$todoList.innerHTML = todoList.reduce((acc, {content, isCompleted}) =>  acc + 
      `<li class="todo-item">
        <span class="todo-text ${isCompleted? 'done' : ''}">
          ${content}
        </span> 
        <button class="todo-remove-button">삭제</button>
      </li>`, '');
    }
  }
  
  // mount
  const mount = () =>  $parent.appendChild(elements.$todoList);

  // 등록할 이벤트 리스너
  const eventListeners = () => {
    const { $todoList } = elements;
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

  // 상위 컴포넌트를 위한 메소드
  this.renders = renders;

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  mount();
  eventListeners();
};
