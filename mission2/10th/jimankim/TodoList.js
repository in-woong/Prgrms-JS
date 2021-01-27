
// Old Way (IE cover)
var data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]
var data2 = [
  {
    text: 'CSS 공부하기',
    isCompleted: false,
  },
  {
    text: 'CSS 복습하기',
    isCompleted: true,
  },
]
var data3 = [
  {
    text: 'TS 공부하기',
    isCompleted: true,
  },
  {
    text: 'TS 복습하기',
    isCompleted: true,
  },
]
// 이곳에서 코딩을 시작하세요!
function TodoList(todos, selector) {
  this.todos = todos;
  this.selector = selector;

  this.render();
}

// @Validate
// !new.target은 IE 지원 X
TodoList.prototype.isValidate = function() {
  if (!(this instanceof TodoList)) {
    throw new Error('new 키워드를 사용해주세요!')
  }
  if (!Array.isArray(this.todos) || this.todos === undefined || this.todos === null) {
    throw new Error('배열이 아니거나 값이 없습니다.')
  }
}

TodoList.prototype.render = function () {        
  var html = this.todos.map(function (item) {
      return item.isCompleted === true ? '<li><s>' + item.text + '</s></li>' : '<li>' + item.text + '</li>'
    }).join('\n');
    document.querySelector(this.selector).insertAdjacentHTML('beforeend', html);
}

TodoList.prototype.setState = function (todos) {
  this.todos = todos;
  this.isValidate();
  this.render();
}

var todoList = new TodoList(data2, '#todo-list');