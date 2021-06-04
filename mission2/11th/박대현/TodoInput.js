import { saveTodoListDataToLocalStorage } from './localStorage.js';
function TodoInput(todoInputElem, todoAddButtonElem, todoListData, todoList, todoCount){

  function addTodoItem(){
    // 빈 텍스트인지 확인하기
    if(todoInputElem.value.replace(/\s+/gi, "") === '') return;

    todoListData.push({
      text: todoInputElem.value,
      isCompleted: false,
    });
    saveTodoListDataToLocalStorage(todoListData);
    todoList.setState(todoListData);
    todoCount.render(todoListData);
    todoInputElem.value='';  
  }
    
  function checkEnterKeyDown(e){
    if(e.keyCode === 13) addTodoItem();
  }

  // 인풋에 엔터를 눌렀을 때, addTodoItem을 호출함
  todoInputElem.addEventListener('keydown', checkEnterKeyDown);
  
  // 버튼을 눌렀을 때, addTodoItem을 호출함
  todoAddButtonElem.addEventListener('click', addTodoItem);

  
}
export { TodoInput };