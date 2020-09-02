
const data = [
  {
    text: '1_1',
    isCompleted: true,
  },
  {
    text: '1_2',
    isCompleted: false,
  }
];

const data2 = [
  {
    text: '2_1',
    isCompleted: true,
  },
  {
    text: '2_2',
    isCompleted: false,
  }
];

const data3 = [
  {
    text: '3_1',
    isCompleted: true,
  },
  {
    text: '3_2',
    isCompleted: false,
  }
];


function TodoList(data, element) {

  this.data = data;
  this.element = element;

  if (Array.isArray(this.data)) {
    let content = '';
    this.render = function() {
      this.data.forEach((todo) => {
        todo.isCompleted ? content += `<div>${todo.text}</div>` : content += `<div><s>${todo.text}</s></div>`
      });
      this.element.innerHTML = content;
      // return content;
    }
  } else {
    errorMsg(this.data);
  }

  this.setState = function(nextData) {
    this.data = nextData;
    // this.element.innerHTML = '';
    // console.log(document.querySelector('#todo-list3'));
    this.render();
  }
}

function errorMsg(data) {
  this.data = data;
  if (this.data === (null || undefined)) {
    throw new Error("데이터가 올바르지 않습니다.");
  } else if (!Array.isArray(data)) {
    throw new Error("배열 형식에 맞게 넣어주시길 바랍니다.");
  }
}

const todoList = new TodoList(data, document.querySelector('#todo-list'));
todoList.render();

const todoList2 = new TodoList(data2, document.querySelector('#todo-list2'));
todoList2.render();

const todoList3 = new TodoList(data3, document.querySelector('#todo-list3'));
todoList3.render();
// todoList3.setState(data);


