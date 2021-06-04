import { TodoInput } from './TodoInput.js';
import { TodoList } from './TodoList.js';
import { TodoCount } from './TodoCount.js';
import { saveTodoListDataToLocalStorage, getTodoListDataFromLocalStorage } from './localStorage.js';
function App() {
  // 생성할 DOM을 더 가독성있게 만들기 위해 template처럼 작성하고 parsing 했다.
  const app = document.createElement('div');
  app.className = "app";
  document.body.appendChild(app);

  const domParser = new DOMParser();
  const doc = domParser.parseFromString(`
    <div class="todo-control-container">
      <input type="text" value="" class="todo-input" />
      <button class="control-button todo-add-button">할 일 추가</button>
      <button class="control-button todo-list-clear-button">전체 삭제</button>
    </div>
    <div class="complete-guide">
      완료된 todo <span class="todo-count">0</span> 개
    </div>
    <ul class="todo-list"></ul>
  `, 'text/html');

  const todoInputElem = doc.querySelector('.todo-input');
  const todoAddButtonElem = doc.querySelector('.todo-add-button');
  const todoListClearButtonElem = doc.querySelector('.todo-list-clear-button')
  const todoListElem = doc.querySelector('.todo-list');
  const todoCountElem = doc.querySelector('.todo-count');
  const todoListData = getTodoListDataFromLocalStorage();
  const todoCount = new TodoCount(todoCountElem);
  const todoList = new TodoList(todoListData, todoListElem, todoCount); 
  const todoInput = new TodoInput(todoInputElem, todoAddButtonElem, todoListData, todoList, todoCount);
  
  // 전체 삭제 버튼을 누르면 removeAll 이벤트가 발생하고 todoListData는 clear되고, todoList와 todoCount는 새롭게 rendering을 해야만한다.
  todoListClearButtonElem.addEventListener('click',() => {
    const event = new Event('removeAll');
    app.dispatchEvent(event);
  })
  app.addEventListener('removeAll', () => {
    todoListData.splice(0);
    saveTodoListDataToLocalStorage(todoListData);
    todoCount.render(todoListData);
    todoList.render(todoListData);
  })


  // app에 childNodes를 부착하기 쉽도록 단순히 조립만한다.
  function buildFragement(){
    const fragment = new DocumentFragment();
    for(const childNode of doc.getRootNode().body.childNodes){
      fragment.appendChild(childNode);
    } 
    return fragment;
  }

  let fragment = null;
  this.render = () =>{
    todoCount.render(todoListData);
    todoList.render(todoListData);
    if(this.fragment) app.removeChild(fragment);
    fragment = buildFragement();
    app.appendChild(fragment);  
  }
  
}
export { App };