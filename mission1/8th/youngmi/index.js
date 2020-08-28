
const data = [
  {
    text: ' JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  }
];

function TodoList(data) {
  this.render = function() {
    data.forEach(element => {
      document.querySelector('#todo-list').innerHTML += `<div>${element.text}</div>`
    })
  }
}

const todoList = new TodoList(data);
todoList.render();
