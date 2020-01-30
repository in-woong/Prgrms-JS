import validator from './validate.js';

function TodoList(toggleTodo, removeTodo, removeAllTodo) {
  validator.isValidInstance(this, TodoList);

  this.listTodos = [];
  this.toggleTodo = toggleTodo;
  this.removeTodo = removeTodo;
  this.removeAllTodo = removeAllTodo;

  this.$list = document.querySelector('.list');

  this.handleClick = (event) => {
    const arrListNode = Array.from(event.target.parentNode.parentNode.childNodes);
    const childNum = arrListNode.indexOf(event.target.parentNode);

    if(event.target.nodeName === 'SPAN' || event.target.nodeName === 'DEL') 
      this.toggleTodo(childNum, event.target.nodeName);
    else if(event.target.nodeName === 'BUTTON') 
      this.removeTodo(childNum);
  }

  this.toggleNode = (childNum, nodeName) => {
    const $childItem = document.querySelectorAll('li')[childNum];
    const $element = nodeName === 'SPAN' ? document.createElement('del') : document.createElement('span');
    $element.innerText = `${this.listTodos[childNum].text}`;

    $childItem.replaceChild($element, 
      nodeName === 'SPAN'
        ? $childItem.querySelector('span')
        : $childItem.querySelector('del')
    );
  }

  this.removeNode = (childNum) => {
    const $childItem = document.querySelectorAll('li')[childNum];
    $childItem.remove();
  }

  this.setState = (nextData) => {
    this.listTodos = validator.isValidData(nextData);
    this.render();
  }

  this.render = () => {
    this.$list.innerHTML = this.listTodos
    .map(item => 
        item.isCompleted 
            ? `<li><del>${item.text}</del><button type="button">X</button></li>` 
            : `<li><span>${item.text}</span><button type="button">X</button></li>`)
    .join('');
  }

  this.$list.addEventListener('click', this.handleClick);
  this.$list.addEventListener('removeAll', this.removeAllTodo);
}

export default TodoList;