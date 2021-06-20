export default function ($parent, initailTodoList, handleToggleDone, handleDeleteTodoItem){
  const $list = Object.assign(document.createElement('ul'), {className:'todo-list'});
  const buildDOM = () => {
    $parent.appendChild($list);
  }
  // 이벤트 위임을 사용해서 할 일 목록의 삭제 버튼을 눌렀는지, 아니면 텍스트를 눌렀는지 확인해서 분기 처리
  $list.addEventListener('click', e => {
    const childElem = e.target;
    const parentElem = childElem.parentElement;
    if(parentElem.classList.contains('todo-item') ) {
      // 삭제 버튼의 부모 노드는 todo-item 클래스를 가진다.
      const $todoList = this.$target;
      for(let index = 0; index < $todoList.childNodes.length; index++){
        if($todoList.childNodes[index] === parentElem) {
          if(childElem.classList.contains('todo-text')){
            // text만 눌렀을 경우 해당 data의 isCompleted를 확인하여 삭선 처리를 해준다.     
            handleToggleDone(index);
          } else if(childElem.classList.contains('todo-remove-button')){
            // 삭제 버튼을 눌렀을 경우 해당 data를 todoListData에서 삭제한다.
            handleDeleteTodoItem(index);
          } return;
        }
      }
    }
    else if(parentElem.classList.contains('todo-text')){
      const grandParentElem = parentElem.parentElement;
      const $todoList = this.$target;
      for(let index = 0; index < $todoList.childNodes.length; index++){
        if($todoList.childNodes[index] === grandParentElem) {
          // text를 눌렀을 때 삭선 처리가 되어야한다.
          handleToggleDone(index);
          return;
        }
      }
    }
  })

  const render = todoList => {
    $list.innerHTML = todoList.reduce((acc, {text, isCompleted}) =>  acc + 
      `<li class="todo-item">
        <span class="todo-text ${isCompleted? 'done' : ''}">
          ${text}
        </span> 
        <button class="todo-remove-button">삭제</button>
      </li>`, '');
  };

  this.setState = newTodoList => {
    render(newTodoList);
  };

  buildDOM();
  render(initailTodoList);
};


