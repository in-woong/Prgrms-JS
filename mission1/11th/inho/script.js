const todoDom = document.querySelector('#todo-list');
const schoolTodoDom = document.querySelector('#school-todo-list');
const clubTodoDom = document.querySelector('#club-todo-list');

const data = [
  {
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

const schoolData = [
  {
    text: '캠퍼스 특허 굴착기 기술트렌드 분석',
    isCompleted: false,
  },
  {
    text: '진로직업선택 실시간 강의',
    isCompleted: true,
  },
];

const clubData = [
  {
    text: 'Article 수정 구현',
    isCompleted: false,
  },
  {
    text: 'css 고치기',
    isCompleted: false,
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
    if (!('text' in element && 'isCompleted' in element)) {
      throw new Error('data element should have <text, isCompleted> property');
    }
  });

  this.data = data;
  this.dom = dom;

  const makeElement = (item) => {
    const li = `<li>${item.text}</li>`;
    if (item.isCompleted) {
      return `<s>${li}</s>`;
    }
    return li;
  };

  this.render = function () {
    dom.innerHTML = `<h2>Todo</h2><ul>${data.reduce((acc, cur) => (acc += makeElement(cur)), '')}</ul>`;
  };
}

const todoList = new TodoList(data, todoDom);
const schoolTodoList = new TodoList(schoolData, schoolTodoDom);
const clubTodoList = new TodoList(clubData, clubTodoDom);

todoList.render();
schoolTodoList.render();
clubTodoList.render();
