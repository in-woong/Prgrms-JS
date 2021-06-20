export default function ($parent, handleAddTodo){
  // TodoInput의 DOM 요소들 생성
  const $todoControlContainer = Object.assign(document.createElement('div'), {className : 'todo-control-container'});
  const $todoInput = Object.assign(document.createElement('input'), {className:'todo-input', value: '', autofocus: true});
  const $todoAddButton = Object.assign(document.createElement('button'), {className: 'control-button todo-add-button', innerText : '할 일 추가'});
  const $todoAllClearButton = Object.assign(document.createElement('button'), {className: 'control-button todo-all-clear-button', innerText : '전체 삭제'});
  
  this.render = () => {};
  
  // DOM 구축
  const buildDOM = () => {
    // 의도한 template
    // <div class="todo-control-container">
    //   <input class="todo-input" value="todo-input" autofocus />
    //   <button class="control-button todo-add-button">할 일 추가</button>
    //   <button class="control-button todo-all-clear-button">전체 삭제</button>
    // </div>
    $todoControlContainer.appendChild($todoInput);
    $todoControlContainer.appendChild($todoAddButton);
    $todoControlContainer.appendChild($todoAllClearButton);
    $parent.appendChild($todoControlContainer);
  }  

  // 이벤트 리스너 부착
  const attachEventListeners = () => {
    const onAddTodo = () => {
      if($todoInput.value.trim() === '') return;
      handleAddTodo($todoInput.value.trim());
      $todoInput.value=''; 
    }

    // 인풋에 엔터를 눌렀을 때, addTodoItem을 호출함
    $todoInput.addEventListener('keydown', e => {
      if(e.key === 'Enter') onAddTodo();
    });
    
    // 버튼을 눌렀을 때, addTodoItem을 호출함
    $todoAddButton.addEventListener('click', onAddTodo);

    // clear 버튼을 눌렀을 때, removeAll 이벤트를 호출함
    $todoAllClearButton.addEventListener('click', () => {
      const event = new Event('removeAll');
      $parent.dispatchEvent(event);
    })
  }
  
  ///////////////////////////////////////////////////////////
  buildDOM();
  attachEventListeners();
};

