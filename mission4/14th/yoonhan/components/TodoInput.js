'use strict';

import { REMOVE_ALL, ADD_TODO_ITEM } from '../customEventTypes.js';
import errorMessages from '../errorMessages.js';

export default function TodoInput($target, { removeAllButtonText, parent }) {
  // new keyword 동반하여 호출했는지 체크
  if (!new.target) {
    throw new Error(errorMessages.WITHOUT_NEW);
  }

  // target 유효성 체크
  if ($target === null) {
    throw new Error(errorMessages.DOM_TARGET_ERROR);
  }

  this.$todoInputContainer = document.createElement('form');
  $target.appendChild(this.$todoInputContainer);

  this.render = function () {
    this.$todoInputContainer.innerHTML = `
      <label for="todo-input"></label>
      <input id="todo-input" type="text" />
      <button type="button" class="removeAllTodo">${removeAllButtonText}</button>
    `;
  };

  // 입력값 초기화
  this.clearInputValue = function () {
    const inputElem = this.$todoInputContainer.querySelector('input');
    inputElem.value = '';
    inputElem.focus();
  };

  // event 리스너 부착(event delegation 구현)
  this.attachEventListener = function () {
    const removeAllTodoButtonElem = this.$todoInputContainer.querySelector(
      'button.removeAllTodo'
    );

    removeAllTodoButtonElem.addEventListener('click', () => {
      const removAllTodoEvent = new CustomEvent(REMOVE_ALL, {
        detail: {
          targetIdx: parent.order,
        },
        bubbles: true,
      });
      this.$todoInputContainer.dispatchEvent(removAllTodoEvent);
    });

    this.$todoInputContainer.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const inputElem = this.$todoInputContainer.querySelector('input');
      const todoInputText = inputElem.value;
      const addTodoItemEvent = new CustomEvent(ADD_TODO_ITEM, {
        detail: {
          todoInputText,
        },
        bubbles: true,
      })
      this.$todoInputContainer.dispatchEvent(addTodoItemEvent);

      this.clearInputValue();
    });
  };

  this.render();

  // 이벤트 리스너 부착
  this.attachEventListener();
}
