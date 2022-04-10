'use strict';

import TodoList from './components/TodoList.js';
import errorMessages from './errorMessages.js';

export default function App($target) {
  // new keyword 동반하여 호출했는지 체크
  if (!new.target) {
    throw new Error(errorMessages.WITHOUT_NEW);
  }

  // target 유효성 체크
  if ($target === null) {
    throw new Error(errorMessages.DOM_TARGET_ERROR);
  }

  this.todoListComponents = [];
  this.render = function () {
    this.todoListComponents.push(
      new TodoList($target, [], this.todoListComponents.length)
    );
    this.todoListComponents.push(
      new TodoList($target, [], this.todoListComponents.length)
    );
  };

  this.attachEventHandler = function () {
    $target.addEventListener('removeAll', (e) => {
      const {
        detail: { targetIdx },
      } = e;
      this.todoListComponents[targetIdx].clearAllTodo();
    });
  };

  this.render();

  // 이벤트 핸들러 부착
  this.attachEventHandler();
}
