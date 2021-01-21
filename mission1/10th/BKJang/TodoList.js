const TodoList = (function (){
  let data;

  function TodoList(arg) {
    data = arg || [];
  }

  TodoList.prototype.render = function() {
    const todoListElement = document.querySelector('#todo-list');

    todoListElement.innerHTML =
      `<ul>
        ${data?.map(todo => {
          return `<li>${todo.text}</li>`;
        }).join('')}
      </ul>`;
  }

  return TodoList;
}());


