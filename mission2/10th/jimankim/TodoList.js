const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]
const data2 = [
  {
    text: 'CSS 공부하기',
    isCompleted: false,
  },
  {
    text: 'CSS 복습하기',
    isCompleted: true,
  },
]
const data3 = [
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
  this.searchBar();
  this.handleDelete();
  
}

// @Validate
// !new.target은 IE 지원 X
TodoList.prototype.isValidate = function() {
  if (!(this instanceof TodoList)) {
    throw new Error('new 키워드를 사용해주세요!');
  }
  if (!Array.isArray(this.todos) || this.todos === undefined || this.todos === null) {
    throw new Error('배열이 아니거나 값이 없습니다.');
  }
}

TodoList.prototype.render = function () {        
  const html = this.todos.map(function (item) {
      return item.isCompleted === true ? '<li><s>' + item.text + '</s><button>삭제</button></li>' : '<li>' + item.text + '<button>삭제</button></li>'
    }).join('\n');
    document.querySelector(this.selector).insertAdjacentHTML('beforeend', html);
}

TodoList.prototype.handleDelete = function () {
  const deleteBtn = document.querySelector(this.selector).querySelectorAll('button');
  deleteBtn.forEach((element, index) => {
    element.addEventListener('click', function() {
      console.log(this.parentNode);
      this.parentNode.remove();
    });
  });
};

TodoList.prototype.searchBar = function () {

  const stateData = this.todos;
  
  const searchArea = document.querySelector('#search-bar');
  const searchAreaInput = searchArea.querySelector('input[type="text"]');

  console.log(searchAreaInput);
  searchAreaInput.addEventListener('change', function() {
    console.log(this.value);    

    stateData.push({text: this.value, isCompleted: false});
    console.log(stateData);
  });

}

TodoList.prototype.setState = function (todos) {
  this.todos = todos;
  this.isValidate();
  this.render();
  this.handleDelete();
  this.searchBar();
}
// function printName()  {
//   const name = document.getElementById('name').value;
//   console.log(name); 
// }