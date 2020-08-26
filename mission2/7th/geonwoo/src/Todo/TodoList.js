'use strict';
import { checkNewTarget, checkTodoParams } from '../utils/index.js';

export default function TodoList(
  target,
  todoState,
  toggleTodoComplete,
  removeTodo
) {
  // data가 없거나 array가 아니거나, data의 모든 원소에 text key를 보유하고 있지 않을 경우 에러
  // 에러 처리
  checkTodoParams(todoState);
  checkNewTarget(this, TodoList);

  this.todoState = todoState;
  this.$target = target;

  this.$target.addEventListener('click', (e) => {
    if (e.target.localName === 'ul') return;

    let nowTodoId = '';
    if (e.target.localName === 'button') {
      nowTodoId = e.target.parentNode.dataset.id;
      removeTodo(parseInt(nowTodoId));
    } else {
      nowTodoId =
        e.target.localName === 'li'
          ? e.target.dataset.id
          : e.target.parentNode.dataset.id;

      toggleTodoComplete(parseInt(nowTodoId));
    }
  });

  this.render = function (todoState = []) {
    this.$target.innerHTML = `${todoState
      .map(({ id, text, isCompleted }) =>
        isCompleted
          ? `<li data-id=${id}><s>${text}</s><button>X</button></li>`
          : `<li data-id=${id}>${text}<button>X</button></li>`
      )
      .join('')}`;
  };

  this.render(this.todoState);
}
