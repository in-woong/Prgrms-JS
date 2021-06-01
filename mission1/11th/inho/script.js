const $todoList = document.querySelector('#todo-list');
const $schoolTodoList = document.querySelector('#school-todo-list');
const $clubTodoList = document.querySelector('#club-todo-list');

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

const nextData = [
  {
    text: '아파트 옥상에서 번지 점프를',
    isCompleted: false,
  },
  {
    text: '신도림 역안에서 스트립쇼를',
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
  [],
];

function TodoList(data, dom) {
  const validate = (data) => {
    if (!new.target) {
      throw new Error(`"new" keyword is missing`);
    }

    if (data === null) {
      throw new Error('data is null');
    }

    if (data === undefined) {
      throw new Error('data is undefined');
    }

    if (!Array.isArray(data)) {
      throw new Error('data is not Array');
    }

    data.forEach((todo) => {
      if (!todo.hasOwnProperty('text')) {
        throw new Error('data should have "text" property');
      }
      if (!todo.hasOwnProperty('isCompleted')) {
        throw new Error('data should have "isCompleted" property');
      }
    });
  };

  const makeLiElement = (item) => {
    if (item.isCompleted) {
      return `<li><s>${item.text}</s></li>`;
    }
    return `<li>${item.text}</li>`;
  };

  validate(data);
  this.data = data;
  this.dom = dom;

  this.setState = (nextData) => {
    if (this.data !== nextData) {
      validate(nextData);
      this.data = nextData;
      this.render();
    }
  };

  this.render = function () {
    dom.innerHTML = `<ul>${this.data.reduce((acc, cur) => (acc += makeLiElement(cur)), '')}</ul>`;
  };
}

const todoList = new TodoList(data, $todoList);
const schoolTodoList = new TodoList(schoolData, $schoolTodoList);
const clubTodoList = new TodoList(clubData, $clubTodoList);

todoList.render();
schoolTodoList.render();
clubTodoList.render();

todoList.setState(nextData);
