import { TodoInput } from './TodoInput.js';

function App() {
  // const app = document.createElement('div');
  // app.classList.add('app');

  // const todoInputWrapper = document.createElement('div');
  // const todoInput = document.createElement('input');
  // const todoAddButton = document.createElement('button');
  // todoInput.type="text";
  // todoInput.value="";
  // todoAddButton.innerText = "할 일 추가"
  // todoInputWrapper.appendChild(todoInput);
  // todoInputWrapper.appendChild(todoAddButton);
  // app.appendChild(todoInputWrapper);

  // const todoList = document.createElement('ul');
  // app.appendChild(todoList);
  // document.body.appendChild(app);

  // 생성할 DOM을 더 가독성있게 만들기 위해 template처럼 작성하고 parsing 했다.
  const domParser = new DOMParser();
  const doc = domParser.parseFromString(`
    <div class="app">
      <input type="text" value="" class="todo-input" />
      <button class="todo-add-button">할 일 추가</button>
      <ul class="todo-list"></ul>
      <div>
        완료된 todo <span class="todo-count">0</span> 개
      </div>
    </div>
  `, 'text/html');
  this.app = doc.getRootNode().body.children[0]; 
  this.todoInput = new TodoInput(this.app);
  this.rendering = () =>{
    document.body.appendChild(this.app);
  }
  
}
export { App };