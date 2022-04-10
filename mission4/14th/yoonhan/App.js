'use strict';

import TodoList from './components/TodoList.js';

export default function App($target) {
  // new keyword 동반하여 호출했는지 체크
  if (!(this instanceof App)) {
    throw new Error(
      '[without new keyword error]: new 키워드를 사용해 호출해 주세요'
    );
  }

  // target 유효성 체크
  if ($target === null) {
    throw new Error(
      '[target error]: 올바른 DOM target 을 인자로 전달해 주세요'
    );
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
