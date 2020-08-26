'use strict';
const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

const yesterdayData = [
  {
    text: 'TS 공부하기',
    isCompleted: true,
  },
  {
    text: 'TS 복습하기',
    isCompleted: true,
  },
];

const tommorowData = [
  {
    text: 'REACT 공부하기',
    isCompleted: false,
  },
  {
    text: 'REACT 복습하기',
    isCompleted: false,
  },
];

function renderErrorMessage(target, message) {
  target.textContent = `에러가 발생했습니다. ${message}`;
}

function checkTodoParams(data) {
  if (
    // 데이터가 없거나, 어레이가 아니거나, 하나라도 규칙에 안 맞는게 있을 때.
    !data ||
    !Array.isArray(data) ||
    data.some(
      (todo) =>
        !todo.text ||
        typeof todo.text !== 'string' ||
        typeof todo.isCompleted !== 'boolean'
    )
  ) {
    throw new Error('정확한 인자를 넣어주세요.');
  }
}

function checkNewTarget(newTarget) {
  if (!newTarget) {
    throw new Error('new 키워드를 사용해 주세요.');
  }
}

function TodoList(target, data) {
  // data가 없거나 array가 아니거나, data의 모든 원소에 text key를 보유하고 있지 않을 경우 에러
  // 에러 처리
  try {
    checkTodoParams(data);
    checkNewTarget(new.target);

    this.todos = data;
    this.target = target;

    this.render = function () {
      const todosLiElements = this.todos
        .map(({ text, isCompleted }) =>
          isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
        )
        .join('');
      this.target.innerHTML = `<ul>${todosLiElements}</ul>`;
    };

    this.setState = function (nextData) {
      try {
        checkTodoParams(target, nextData);
        this.todos = nextData;
        this.render();
      } catch (e) {
        console.error(e);
        renderErrorMessage(target, e.message);
      }
    };

    this.render();
  } catch (e) {
    console.error(e);
    renderErrorMessage(target, e.message);
  }
}

// setState 테스트
const testData = [
  {
    text: '코드리뷰 하기',
    isCompleted: false,
  },
  {
    text: '내 코드 리뷰 하기',
    isCompleted: false,
  },
];

const todoList = new TodoList(document.getElementById('todo-list'), data);
const yesterdayTodoList = new TodoList(
  document.getElementById('yesterday-todo-list'),
  yesterdayData
);
const tommorowTodoList = new TodoList(
  document.getElementById('tommorow-todo-list'),
  tommorowData
);

tommorowTodoList.setState(123);
