const todoDom = document.querySelector('#todo-list');
const schoolTodoDom = document.querySelector('#school-todo-list');
const clubTodoDom = document.querySelector('#club-todo-list');

const data = [
  {
    text: 'JS 공부하기',
  },
  {
    text: 'JS 복습하기',
  },
];

const schoolData = [
  {
    text: '캠퍼스 특허 굴착기 기술트렌드 분석',
  },
  {
    text: '진로직업선택 실시간 강의',
  },
];

const clubData = [
  {
    text: 'Article 수정 구현',
  },
  {
    text: 'css 고치기',
  },
];

function TodoList(data, dom) {
  if (!new.target) {
    throw new Error('new keyword is missing');
  }

  if (data === null || data === undefined) {
    throw new Error('data is null / undefined');
  }

  if (!Array.isArray(data)) {
    throw new Error('data is not Function');
  }

  data.forEach((element) => {
    if (!'text' in element) {
      throw new Error('data element should have <text> property');
    }
  });

  this.data = data;
  this.dom = dom;

  this.render = function () {
    dom.innerHTML = data.reduce((acc, cur) => (acc += cur.text + ' '), '');
  };
}

const todoList = new TodoList(data, todoDom);
const schoolTodoList = new TodoList(schoolData, schoolTodoDom);
const clubTodoList = new TodoList(clubData, clubTodoDom);

todoList.render();
schoolTodoList.render();
clubTodoList.render();
