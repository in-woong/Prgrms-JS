import { checkValidation } from './utils.js';


function TodoList(data, id) {
  if (!new.target) { throw new Error('new 키워드를 사용해주세요!'); }
  checkValidation(data);

  this.todos = data;
  this.id = id;
  this.olExist = false;
  this.render();
}

TodoList.prototype.render = function () {
  const todoDiv = document.querySelector(this.id);
  let orderedList = null;

  // ol 노드가 존재하면 사용하고 아니면 새로 만들어서 할당
  if (!this.olExist) {
    orderedList = document.createElement('ol');
    todoDiv.append(orderedList);
    this.olExist = true;
  } else {
    orderedList = todoDiv.querySelector('ol');
  }

  const todoHtmlString = this.todos.map(todo =>
    `<li>${todo.isCompleted ? `<s>${todo.text}</s>` : todo.text}</li>`).join('');
  orderedList.innerHTML = todoHtmlString;
}

TodoList.prototype.setState = function (nextData) {
  this.todos = nextData;
  this.render();
}

export default TodoList;
