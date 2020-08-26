import { isFunction, ENTER_KEY } from './utils.js';

function TodoInput($target, addTask, removeAllEvent) {
  if (!(this instanceof TodoInput)) {
    throw new Error("Create instance with 'new'");
  }
  if (!isFunction(addTask)) {
    throw new Error('addTask is not a function');
  }

  this.$target = $target;

  this.onClickAddBtn = function () {
    if (this.$inputElem.value === '') {
      console.log('Empty Input');
      return;
    }
    const task = createTaskByStr(this.$inputElem.value);
    addTask(task);
    this.$inputElem.value = '';
    this.$inputElem.focus();
  };

  this.initEventListener = function () {
    this.$formElem.addEventListener('submit', (event) => {
      this.onClickAddBtn();
      event.preventDefault();
    });

    this.$inputElem.addEventListener('keyup', (event) => {
      if (event.keyCode === ENTER_KEY) {
        this.onClickAddBtn();
      }
    });

    this.$removeAllBtn.addEventListener('click', (event) => {
      event.target.dispatchEvent(removeAllEvent);
    });
  };

  this.render = function () {
    this.$target.innerHTML = `
          <label for="todoInput-form">
            <form id="todoInput-form">
              <input id="todoInput-input" type="text" placeholder="Write a new task" />
              <button id="todoInput-add">Add</button>
            </form>
          </label>
          <button id="todoInput-removeAll">Remove All</button>
  `;
    this.$inputElem = document.querySelector('#todoInput-input');
    this.$formElem = document.querySelector('#todoInput-form');
    this.$removeAllBtn = document.querySelector('#todoInput-removeAll');
  };

  this.render();
  this.initEventListener();
}

function createTaskByStr(str) {
  return {
    text: str,
    isCompleted: false,
  };
}

export default TodoInput;
