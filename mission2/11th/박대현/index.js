import { TodoList } from './TodoList.js ';
const todoInputElem = document.querySelector('#todo-input');
const todoAddButtonElem = document.querySelector('#todo-add-button');
const todoListElem = document.querySelector('#todo-list');
const todoListData = [];

// todoList를 생성한다
const todoList = new TodoList(todoListData, todoListElem);

// todo를 추가하기 위해서 todoListData에 추가를 하고 새롭게 렌더링을 한다. 
// 아이템이 추가된 이후에는 input의 value를 초기화해준다.
function addTodoItem(){
  todoListData.push({
    text: todoInputElem.value,
    isCompleted: false,
  });
  todoList.setState(todoListData);
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
      }
    } else if(childElem.classList.contains('todo-remove-button')){
      // 삭제 버튼을 눌렀을 경우 해당 data를 todoListData에서 삭제한다.
      todoListData.splice(todoListIndex,1);
      todoList.setState(todoListData);
    }
  }
})
