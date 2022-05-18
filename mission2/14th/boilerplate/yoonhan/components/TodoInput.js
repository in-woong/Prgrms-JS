'use strict';

export default function TodoInput($target, { removeAllButtonText, parent }) {
  // new keyword 동반하여 호출했는지 체크
  if (!(this instanceof TodoInput)) {
    throw new Error('[without new keyword error]: new 키워드를 사용해 호출해 주세요');
  }

  // target 유효성 체크
  if ($target === null) {
    throw new Error('[target error]: 올바른 DOM target 을 인자로 전달해 주세요');
  }


  this.$todoInputContainer = document.createElement('form');
  $target.appendChild(this.$todoInputContainer);

  this.render = function () {
    this.$todoInputContainer.innerHTML = `
      <label for="todo-input"></label>
      <input id="todo-input" type="text" />
      <button type="button" class="removeAllTodo">${removeAllButtonText}</button>
    `
  }

  // Todo 추가
  this.addTodoItem = function () {
    const inputElem = this.$todoInputContainer.querySelector('input');
    const todoInputText = inputElem.value;

    if (todoInputText === '') {
      window.alert('할 일 텍스트를 입력해주세요!');
      return;
    }

    parent.setState([
      ...parent.data,
      {
        text: todoInputText,
        isCompleted: false
      }
    ]);
  }

  // 입력값 초기화
  this.clear = function () {
    const inputElem = this.$todoInputContainer.querySelector('input');
    inputElem.value = '';
    inputElem.focus();
  }

  // event 리스너 부착(event delegation 구현)
  this.attachEventListener = function () {
    const removeAllTodoButtonElem = this.$todoInputContainer.querySelector('button.removeAllTodo');

    removeAllTodoButtonElem.addEventListener('click', () => {
      const removAllTodoEvent = new CustomEvent('removeAll', {
        detail: {
          targetIdx: parent.order
        },
        bubbles: true,
      });
      this.$todoInputContainer.dispatchEvent(removAllTodoEvent);
    });

    this.$todoInputContainer.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.addTodoItem();
      this.clear();
    });
  }

  this.render();

  // 이벤트 리스너 부착
  this.attachEventListener();
}