import { checkNewKeyword, checkTarget, checkTodoListData } from './validation.js'

export default function TodoList(data, $todoList) {
  this.validation = () => {
    checkNewKeyword(this);
    checkTarget($todoList);
    checkTodoListData(data);
  };

  this.validation();
  this.data = data;
  this.$todoList = $todoList;

  this.render = () => {
    const htmlString = this.data.map((data) => (
      data.isCompleted
        ? `<li>
              <s>${data.text}</s> <button> x </button>
            </li>`
        : `<li>
              ${data.text} <button> x </button>
           </li> `
    )).join('\n');
    this.$todoList.innerHTML = `<ul>${htmlString}</ul>`;
  };

  this.setState = (data) => {
    checkTodoListData(data);
    this.data = data;
    this.render();
  };

  this.render();
}
