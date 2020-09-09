
const data = [
  {
    text: '공부하기',
    isCompleted: false,
  },
  {
    text: '복습하기',
    isCompleted: false,
  }
];

const data2 = [
  {
    text: '운동하기',
    isCompleted: true,
  },
  {
    text: '청소하기',
    isCompleted: false,
  }
];

const data3 = [
  {
    text: '노래듣기',
    isCompleted: true,
  },
  {
    text: '춤추기',
    isCompleted: false,
  }
];


function TodoList(data, element) {
  this.data = data;
  this.element = element;

  this.validateData = function() {
    if (!Array.isArray(this.data)) {
      throw new Error("배열형태가 아닙니다.")
    } else if (this.data === (null || undefined)) {
      throw new Error("데이터가 올바르지 않습니다.");
    } else if (!Array.isArray(data)) {
      throw new Error("배열 형식에 맞게 넣어주시길 바랍니다.");
    } else if (this === window) {
      throw new Error("new키워드를 확인해주시길 바랍니다.");
    }

    this.data.forEach((todo) => {
      if (typeof todo.text !== 'string' || typeof todo.isCompleted !== 'boolean') {
        throw new Error('올바른 데이터를 넣어주세요.');
      }
    });
  }

  this.render = function() {
    this.element.innerHTML = this.data.map((todo) => {
      return todo.isCompleted ? `<div>${todo.text}</div>` : `<div><s>${todo.text}</s></div>`
    }).join('');
  }

  this.setState = function(nextData) {
    this.data = nextData;
    this.render();
  }

  this.render();
  this.validateData();
}

const todoList = new TodoList(data, document.querySelector('#todo-list'));
const todoList2 = new TodoList(data2, document.querySelector('#todo-list2'));
const todoList3 = TodoList(data3, document.querySelector('#todo-list3'));
// todoList3.setState(data);


