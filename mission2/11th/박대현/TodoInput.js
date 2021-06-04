import { TodoList } from './TodoList.js';
import { TodoCount } from './TodoCount.js';

function TodoInput(root){
  const todoInputElem = root.querySelector('.todo-input');
  const todoAddButtonElem = root.querySelector('.todo-add-button');
  const todoListElem = root.querySelector('.todo-list');
  const todoCountElem = root.querySelector('.todo-count');
  const todoListData = [];
  const todoList = new TodoList(todoListData, todoListElem); 
  const todoCount = new TodoCount(todoListData, todoCountElem);

  function addTodoItem(){
    // 빈 텍스트인지 확인하기
    if(todoInputElem.value.replace(/\s+/gi, "") === '') return;

    todoListData.push({
      text: todoInputElem.value,
      isCompleted: false,
    });
    todoList.setState(todoListData);
    todoCount.render();
    todoInputElem.value='';  
  }
    
  function checkEnterKeyDown(e){
    if(e.keyCode === 13) addTodoItem();
  }

  // 인풋에 엔터를 눌렀을 때, addTodoItem을 호출함
  todoInputElem.addEventListener('keydown', checkEnterKeyDown);
  
  // 버튼을 눌렀을 때, addTodoItem을 호출함
  todoAddButtonElem.addEventListener('click', addTodoItem);

  // 이벤트 위임을 사용해서 할 일 목록의 삭제 버튼을 눌렀는지, 아니면 텍스트를 눌렀는지 확인해서 분기 처리
  todoListElem.addEventListener('click', e => {
    const childElem = e.target;
    const parentElem = childElem.parentElement;
    if(parentElem.classList.contains('todo-item') ) {
      // 부모의 클래스가 todo-item을 가지는 경우, todoList에서 몇번째인지 확인한다.
      let todoListIndex;
      for(let i = 0; i < todoListElem.childNodes.length; i++){
        if(todoListElem.childNodes[i] === parentElem) {todoListIndex = i; break;}
      }
  
      if(childElem.classList.contains('todo-text')){
        // text만 눌렀을 경우 해당 data의 isCompleted가 false인지를 확인하여 삭선 처리를 해준다.
        if(!todoListData[todoListIndex].isCompleted){
          todoListData[todoListIndex].isCompleted = true;
          childElem.innerHTML = `<s>${childElem.innerText}</s>`;
          // 완료처리가 되면 todoCount를 다시 그려줘야한다.
          todoCount.render();
        }
      } else if(childElem.classList.contains('todo-remove-button')){
        // 삭제 버튼을 눌렀을 경우 해당 data를 todoListData에서 삭제한다.
        const deletedTodo = todoListData.splice(todoListIndex,1);
        todoList.setState(todoListData);
        
        // 삭제가 될 요소의 isCompleted가 true 였다면 todoCount를 다시 그려줘야한다.
        if(deletedTodo[0].isCompleted) todoCount.render();
        
        
      }
    }
  })
}
export { TodoInput };