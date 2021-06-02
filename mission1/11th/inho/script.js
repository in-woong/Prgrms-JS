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
    isCompleted: true,
  },
];

function TodoList(data, dom) {
  if (!new.target) {
    throw new Error(`"new" keyword is missing`);
  }
  const validateData = (data) => {
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
      if (todo.text === undefined) {
        throw new Error('text is undefined');
      }
      if (todo.isCompleted === undefined) {
        throw new Error('isCompleted is undefined');
      }
      if (todo.text === null) {
        throw new Error('text is null');
      }
      if (todo.isCompleted === null) {
        throw new Error('inCompleted is null');
      }

      if (typeof todo.text !== 'string') {
        throw new Error('text should be string');
      }

      if (typeof todo.isCompleted !== 'boolean') {
        throw new Error('isCompleted should be boolean');
      }
    });
  };

  const makeLiElementString = (item) => (item.isCompleted ? `<li><s>${item.text}</s></li>` : `<li>${item.text}</li>`);

  validateData(data);
  this.data = data;
  this.dom = dom;

  this.setState = (nextData) => {
    if (this.data !== nextData) {
      validateData(nextData);
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
