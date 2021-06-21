export default function ($parent,  { handleToggleDone, handleDeleteTodoItem }, { label, mode }){
  // todoList의 DOM 요소
  const elements  = {
    $todoListWrapper : Object.assign(document.createElement('article'), {className: 'todo-list-wrapper'}),
    $statusLabel : Object.assign(document.createElement('div'), { className : 'status-label', innerText : label}),
    $todoList : Object.assign(document.createElement('ul'), { className : 'todo-list' }),
  }
  
  // 관리하는 data를 바탕으로 render 해줄 함수
  const renders = {
    todoListRender : todoList => {
      elements.$todoList.innerHTML = todoList.reduce((acc, {content, isCompleted}, index) =>  {
        const template = 
          `<li class="todo-item " draggable="true" data-id="${index}">
            <button class="todo-remove-button">삭제</button>
            <div class="todo-text ${isCompleted? 'done' : ''}"> ${content} </div> 
          </li>`;
        // mode가 false일 경우 todoList를 렌더링하고, true일 경우 doneList를 렌더링한다
        return acc + (isCompleted === mode ? template : '');
      }, '') ;
    }
  }
  
  // mount
  const mount = () =>  {
    const { $statusLabel, $todoList, $todoListWrapper } = elements;
    $todoListWrapper.appendChild($statusLabel);
    $todoListWrapper.appendChild($todoList);
    $parent.appendChild($todoListWrapper);
  }

  // 등록할 이벤트 리스너
  const eventListeners = () => {
    const { $todoList } = elements;
    $todoList.addEventListener('click', e => {
      const childElem = e.target;                     // e.target은 삭제 버튼 또는 텍스트를 가리킨다.
      const parentElem = childElem.parentElement;     // parentElem은 무조건 li태그를 가리킨다.
      const targetIndex = parseInt(parentElem.dataset.id);
      if(childElem.classList.contains('todo-text')){
        handleToggleDone(targetIndex);                // text만 눌렀을 경우 해당 data의 isCompleted를 확인하여 삭선 처리를 해준다.     
      } else if(childElem.classList.contains('todo-remove-button')){
        handleDeleteTodoItem(targetIndex);            // 삭제 버튼을 눌렀을 경우 해당 data를 todoListData에서 삭제한다. 
      }
    });

    $todoList.addEventListener('dragstart', e => {
      if(e.target.classList.contains('todo-item')) {
        const message = JSON.stringify({
          targetIndex: e.target.dataset.id,
          fromLabel: label
        })
        e.dataTransfer.setData('text/plain', message);
      }
    });

    $todoList.addEventListener("dragover", e => {
      // prevent default to allow drop
      e.preventDefault();
    });
    
    $todoList.addEventListener('drop', e => {
      e.preventDefault();
      if(e.path.some(trace => trace === $todoList)){
        const {targetIndex,fromLabel} = JSON.parse(e.dataTransfer.getData('text'));
        if(fromLabel !== label)  handleToggleDone(parseInt(targetIndex));
      }
      
    })
  };

  // 상위 컴포넌트를 위한 메소드
  this.renders = renders;

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  mount();
  eventListeners();
};
