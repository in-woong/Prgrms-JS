export default function ($parent, handleAddTodo){
  const $controlContainer = Object.assign(document.createElement('div'), {className : 'todo-control-container'});
  const $input = Object.assign(document.createElement('input'), {className:'todo-input', value: '', autofocus: true});
  const $addButton = Object.assign(document.createElement('button'), {className: 'control-button todo-add-button', innerText : '할 일 추가'});
  const $allClearButton = Object.assign(document.createElement('button'), {className: 'control-button todo-all-clear-button', innerText : '전체 삭제'});
  
  const buildDOM = () => {
    // 예상 결과
    // <div class="todo-control-container">
    //   <input class="todo-input" value="todo-input" autofocus />
    //   <button class="control-button todo-add-button">할 일 추가</button>
    //   <button class="control-button todo-all-clear-button">전체 삭제</button>
    // </div>
    $controlContainer.appendChild($input);
    $controlContainer.appendChild($addButton);
    $controlContainer.appendChild($allClearButton);
    $parent.appendChild($controlContainer);
  }  

  const attachEventListeners = () => {
    const onAddTodo = () => {
      if($input.value.trim() === '') return;
      handleAddTodo($input.value.trim());
      $input.value=''; 
    }

    // 인풋에 엔터를 눌렀을 때, addTodoItem을 호출함
    $input.addEventListener('keydown', e => {
      if(e.key === 'Enter') onAddTodo();
    });
    
    // 버튼을 눌렀을 때, addTodoItem을 호출함
    $addButton.addEventListener('click', onAddTodo);

    // clear 버튼을 눌렀을 때, removeAll 이벤트를 호출함
    $allClearButton.addEventListener('click', () => {
      const event = new Event('removeAll');
      $parent.dispatchEvent(event);
    })
  }
  
  buildDOM();
  attachEventListeners();
}
