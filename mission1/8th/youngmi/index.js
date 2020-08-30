
const data = [
  {
    text: 'js',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  }
];

function TodoList(data) {
  if (Array.isArray(data)) {
    let content = '';
    this.render = function() {
      data.forEach((todo) => {
        content += `<div>${todo.text}</div>`
      });
      document.querySelector('#todo-list').innerHTML = content;
    }
  } else {
    errorMsg(data);
  }
}

function errorMsg(data) {
  if (data === (null || undefined)) {
    throw new Error("데이터가 올바르지 않습니다.");
  } else if (!Array.isArray(data)) {
    throw new Error("배열 형식에 맞게 넣어주시길 바랍니다.");
  }
}

const todoList = new TodoList(data);
todoList.render();
