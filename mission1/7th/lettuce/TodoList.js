const data = [
  { text: 'JS 공부하기', isCompleted: true },
  { text: 'JS 복습하기', isCompleted: false },
  //{ text: 'test' },
  // { hello: 'world' },
  // ['text'],
];

const workData = [
  { text: '이슈 체크', isCompleted: false },
  { text: '기능 구현', isCompleted: false },
];

const studyDate = [
  { text: '알고리즘', isCompleted: false },
  { text: '자바스크립트', isCompleted: true },
];

class TodoList {
  constructor(_data, targetId) {
    if (!this.isValidData(_data)) {
      throw new Error('error message');
    }
    this.data = _data;
    this.todoList = document.querySelector(`#${targetId}`);
  }

  isValidData(_data) {
    if (!Array.isArray(_data)) return false;
    return _data.every(
      (dict) =>
        dict &&
        'text' in dict &&
        typeof dict.text === 'string' &&
        'isCompleted' in dict &&
        typeof dict.isCompleted === 'boolean'
    );
  }

  render() {
    const dataHTML = this.data
      .map(({ text, isCompleted }) => {
        if (isCompleted) return `<li class="job">${text}</li>`;
        else return `<li class="job"> <s>${text}</s> </li>`;
      })
      .join('');
    this.todoList.innerHTML = `<ul class="jobs">${dataHTML}</ul>`;
  }

  setState(nextData) {
    if (!this.isValidData(nextData)) {
      throw new Error('wrong nextData');
    }
    this.data = nextData;
    this.render();
  }
}

function init() {
  const todoList = new TodoList(data, 'todo-list');
  const workList = new TodoList(workData, 'todo-list-work');
  const studyList = new TodoList(studyDate, 'todo-list-study');

  todoList.render();
  workList.render();
  studyList.render();
  /*
  const nextData = [
    { text: 'test1', isCompleted: true },
    { text: 'test2', isCompleted: false },
  ];

  setTimeout(() => {
    todoList.setState(nextData);
  }, 1000);
  */
}

init();
