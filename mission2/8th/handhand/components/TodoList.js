import { checkValidation } from '../utils.js';


function TodoList({ $target, todos, doneTodo, removeTodo }) {
  if (!new.target) { throw new Error('new 키워드를 사용해주세요!'); }
  checkValidation(todos);
  
  this.todos = todos;
  this.$target = $target;
  this.olExist = false;
  this.$todoList = document.createElement('div');
  this.$todoList.addEventListener('click', (event) => {
    const keyString = event.target.closest('li').dataset.key;
    if (event.target.className === 'remove') removeTodo(keyString);
    else if (event.target.closest('span').className === 'content') doneTodo(keyString);
  });

  this.$target.append(this.$todoList);
  this.render();
}

TodoList.prototype.render = function () {
  let orderedList = null;

  // ol 노드가 존재하면 사용하고 아니면 새로 만들어서 할당
  if (!this.olExist) {
    orderedList = document.createElement('ol');
    this.$todoList.append(orderedList);
    this.olExist = true;
  } else {
    orderedList = this.$todoList.querySelector('ol');
  }

  const todoHtmlString = this.todos.map(todo =>
    `<li data-key="${todo.hash}"><span class="content">${todo.isCompleted ? `<s>${todo.text}</s>` : todo.text}</span><button class="remove">삭제</button></li>`).join('');
  orderedList.innerHTML = todoHtmlString;
}

TodoList.prototype.setState = function (nextData) {
  this.todos = nextData;
  this.render();
}

export default TodoList;
