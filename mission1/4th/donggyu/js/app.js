function TodoList(data) {
  this.data = data;

  this.render = function() {
    for (let value in data) {
      console.log(data[value])
      document.querySelector('#todo-list').innerHTML = `<div>${data[value].text}</div>`
    }
  }
}

const todoList = new TodoList(data);
todoList.render();
