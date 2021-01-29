import { dataStudy, dataExercise, dataPlay } from './data.js';

const ERROR_MESSAGE = {
  INVALID: 'Invalid parameter',
  IS_NOT_ARRAY: 'Data is not array',
  IS_NOT_STRING: 'Title is must be type of string',
  EMPTY_TEXT: 'Some Data does not have any text',
};

class TodoList {
  constructor(listTitle, listData) {
    const $app = document.querySelector('#app');
    const $listBox = document.createElement('div');
    this.listBox = $listBox;
    this.listTitle = listTitle;
    this.listData = listData;

    $app.appendChild($listBox);
    $listBox.classList.add(listTitle);
    this.setState(listData);
  }

  setState = (nextData) => {
    this.listData = nextData;
    this.validator(this.listTitle, nextData);
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
    listData.some((item) => {
      if (item.text.length < 1) {
        throw new Error(ERROR_MESSAGE.EMPTY_TEXT);
      }
    });
  };

  render = () => {
    let listTitleString = '';
    let listItemString = '';

    listTitleString = `<strong class="title">${this.listTitle}</strong>`;
    this.listData.forEach((item) => {
      item.isCompleted
        ? (listItemString += `<div><s>${item.text}</s></div>`)
        : (listItemString += `<div>${item.text}</div>`);
    });

    this.listBox.innerHTML = listTitleString + listItemString;
  };
}

new TodoList('todo-list', dataStudy);
new TodoList('exercise-list', dataExercise);
const PlayTodoList = new TodoList('play-list', dataPlay);

setTimeout(() => {
  PlayTodoList.setState([
    {
      text: '넷플릭스에서 숨박꼭질 영화보기',
      isCompleted: true,
    },
    {
      text: '쇼핑몰 옷 구경하기',
      isCompleted: true,
    },
    {
      text: '요리중독 돈 많이 벌어놓기',
      isCompleted: false,
    },
  ])
}, 3000);
