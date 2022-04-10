'use strict';

import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';
import { isValidData } from '../validate.js';
import errorMessages from '../errorMessages.js';
import { deleteTodoItem } from '../api.js'

export default function TodoList($target, data, order) {
  // new keyword 동반하여 호출했는지 체크
  if (!new.target) {
    throw new Error(errorMessages.WITHOUT_NEW);
  }

  // target 유효성 체크
  if ($target === null) {
    throw new Error(errorMessages.DOM_TARGET_ERROR);
  }

  this.data = data;
  this.order = order;
  this.keyTypeObject = {
    content: 'string',
    isCompleted: 'boolean',
    _id: 'string',
  };
  this.$todoListContainer = document.createElement('div');
  this.$todoList = document.createElement('ul');
  $target.appendChild(this.$todoListContainer);
  // TodoInput 컴포넌트 생성 및 append
  this.todoInput = new TodoInput(this.$todoListContainer, {
    removeAllButtonText: '모든 Todo 제거',
    parent: this,
  });
  // Todo list append
  this.$todoListContainer.appendChild(this.$todoList);
  // TodoCount 컴포넌트 생성 및 append
  this.todoCount = new TodoCount(this.$todoListContainer, this.data);

  // state 세팅 method
  this.setState = function (nextData) {
    if (!isValidData(nextData, this.keyTypeObject)) {
      throw new Error(errorMessages.VALID_DATA);
    }
    this.data = nextData;
    this.render();
    this.todoCount.setState(this.data);
  };

  // 렌더링
  this.render = function () {
    const liTagsString = this.data
      .map((item, idx) => {
        if (item.isCompleted) {
          return `
          <li>
            ✔️
            <s>
              <span data-todo-index="${idx}" class="cursor-pointer">
                ${item.content}
              </span>
            </s>
            <button data-todo-index="${idx}">삭제</button>
          </li>
        `;
        } else {
          return `
          <li>
            <span data-todo-index="${idx}" class="cursor-pointer">
              ${item.content}
            </span>
            <button data-todo-index="${idx}">삭제</button>
          </li>
        `;
        }
      })
      .join('');
    this.$todoList.innerHTML = liTagsString;
  };

  this.clearAllTodo = function () {
    this.setState([]);
  };

  this.removeTodoItem = async function (clickedIndex) {
    const clickedTodoItem = this.data.find((todoItem, idx) => clickedIndex === idx);
    await deleteTodoItem(clickedTodoItem._id)
  };

  this.attachEventListener = function () {
    this.$todoList.addEventListener('click', (e) => {
      const {
        tagName,
        dataset: { todoIndex },
      } = e.target;

      if (tagName === 'SPAN') {
        const nextState = this.data.map((item, idx) => {
          if (idx === parseInt(todoIndex, 10)) {
            item.isCompleted = true;
          }
          return item;
        });
        this.setState(nextState);
      }

      if (tagName === 'BUTTON') {
        this.removeTodoItem(parseInt(todoIndex, 10));
      }
    });
  };

  // 데이터 유효성 체크
  if (!isValidData(this.data, this.keyTypeObject)) {
    throw new Error(errorMessages.VALID_DATA);
  }

  // 렌더링
  this.render();

  // 이벤트 리스너 부착
  this.attachEventListener();
}
