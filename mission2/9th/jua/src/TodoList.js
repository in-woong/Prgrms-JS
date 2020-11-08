import { checkNewKeyword, checkTarget, checkTodoListData } from './validation.js';

export default function TodoList(data, $todoList, app) {
  this.validation = () => {
    checkNewKeyword(this);
    checkTarget($todoList);
    checkTodoListData(data);
  };

  this.validation();
  this.data = data;
  this.$todoList = $todoList;

  this.render = () => {
    const htmlString = this.data.map((data, index) => (
      data.isCompleted
        ? `<li id=${index}>
              <s> ${data.text} </s> 
              <button> x </button>
            </li>`
        : `<li id=${index}>
              <span> ${data.text} </span>
              <button> x </button>
           </li> `
    )).join('\n');
    this.$todoList.innerHTML = `<ul>${htmlString}</ul>`;
  };

  this.bindEvent = () => {
    $todoList.addEventListener('click', (e) => {
      const { id } = e.target.parentNode;
      if (e.target.tagName === 'BUTTON') {
        app.deleteTodo(id);
      }
      if (e.target.tagName === 'SPAN' || e.target.tagName === 'S') {
        app.completeTodo(id);
      }
    });
  };

  this.setState = (data) => {
    checkTodoListData(data);
    this.data = data;
    this.render();
  };

  this.render();
  this.bindEvent();
}
