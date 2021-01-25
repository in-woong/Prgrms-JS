import { dataStudy, dataExercise, dataPlay } from './data.js';

const ERROR_MESSAGE = {
  INVALID: 'Invalid parameter',
  IS_NOT_ARRAY: 'Data is not array',
  IS_NOT_STRING: 'Title is must be type of string',
  EMPTY_TEXT: 'Some Data does not have any text',
};

class TodoList {
  constructor(listTitle, nextData) {
    // review4 : 렌더링 될떄마다 불필요한 DOM Search가 계속되는 문제해결
    const $app = document.querySelector('#app');
    const $listBox = document.createElement('div');
    this.listBox = $listBox;
    this.listTitle = listTitle;
    this.nextData = nextData;

    $app.appendChild($listBox);
    $listBox.classList.add(listTitle);
    this.setState(listTitle, nextData);
  }

  setState = (listTitle, nextData) => {
    this.validator(listTitle, nextData);
    this.render();
  };

  validator = (listTitle, listData) => {
    if (
      listData === null ||
      listData === undefined ||
      listTitle === null ||
      listTitle === undefined
    ) {
      throw new Error(ERROR_MESSAGE.INVALID);
    }
    if (!Array.isArray(listData)) {
      throw new Error(ERROR_MESSAGE.IS_NOT_ARRAY);
    }
    if (typeof listTitle !== 'string') {
      throw new Error(ERROR_MESSAGE.IS_NOT_STRING);
    }
    // review3 : immutable array 가 아니면 forEach / some 사용
    listData.some((item) => {
      if (item.text.length < 1) {
        throw new Error(ERROR_MESSAGE.EMPTY_TEXT);
      }
    });
  };

  render = () => {
    // review5 : map은 immutable array를 새롭게 만들어낼때 사용,
    // 업데이트시 reflow(리렌더링)을 야기시키는 innerHTML은 한번만 사용
    let listTitleString = '';
    let listItemString = '';

    listTitleString = `<strong class="title">${this.listTitle}</strong>`;
    this.nextData.forEach((item) => {
      item.isCompleted
        ? (listItemString += `<div><s>${item.text}</s></div>`)
        : (listItemString += `<div>${item.text}</div>`);
    });

    this.listBox.innerHTML = listTitleString + listItemString;
  };
}

// review6 : 따로 인스턴스화 할 때 setState()를 하지 않도록 변경
new TodoList('todo-list', dataStudy);
new TodoList('exercise-list', dataExercise);
new TodoList('play-list', dataPlay);
// review2 : EOL
