import { checkTypes } from '../utils/validateData.js'

export default function TodoList(listName, data, appDeleteTodo, appCompleteTodo) {
  this.data = data;
  
  if(!new.target) throw new Error('new 키워드를 붙이지 않았습니다.');

  checkTypes(data);

  this.render = () => {
    document.querySelector(`#${listName}`).innerHTML = `${this.data
      .map((element, index) => element.isCompleted ? `<li class="todo_lists" id=${index} completed=${element.isCompleted}><span>${element.text}</span><button id="deletetodo-btn">삭제</button></li>` 
        : `<li class="todo_lists" id=${index} completed=${element.isCompleted}><s>${element.text}</s><button class="deletetodo-btn">삭제</button></li>`)
      .join('')}`;
  }
  
  this.setState = (nextData) => {
    checkTypes(nextData);

    localStorage.setItem('todo-list', JSON.stringify(nextData));
    this.data = nextData;
    this.render();
    this.btnEvent();
  }

  this.btnEvent = () => {
    const todoDatas = document.querySelectorAll('.todo_lists');
    todoDatas.forEach((target) => {
      target.addEventListener('click', (event) => {
        event.stopPropagation();
        
        const currentTarget = event.currentTarget;
        const id = currentTarget.id;
        const items = this.data;

        if(event.target.tagName === "SPAN" || event.target.tagName === "S"){
          appCompleteTodo(id);
        } 

        if(event.target.tagName === "BUTTON"){
          appDeleteTodo(id);
        }
       
        this.setState(items);
      });
    });
  }

  this.setState(data);
}
