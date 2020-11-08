import {useNewKeyword, useArrayState, checkTarget, checkTypes} from './validation.js'

/**
 * TodoList 컴포넌트
 * @param $target
 * @param data
 * @constructor
 */
export default function TodoList($target, data) {
  this.targetEl = $target;
  this.data = data;
  this.todoListEl = document.createElement('ul');
  this.todoListEl.classList.add("todo-list");

  this.validation = () => {
    useNewKeyword(this);
    useArrayState(this.data);
    checkTarget(this.targetEl);
    checkTypes(
      this.data,
      ({text, isCompleted}) =>
        typeof text === 'string' && typeof isCompleted === 'boolean'
    )
  }
  /**
   * update TodoList
   * @param nextData
   */
  this.setState = (nextData) => {
    this.data = nextData;
    this.render();
  }

  /**
   * create TodoList
   */
  this.render = () => {
    // 데이터 검증
    this.validation();

    // todo-list 생성
    this.todoListEl.innerHTML = `${this.data.map(({ text, isCompleted }, index) =>
      `<li>
        <span id="todo-item-${index}"> ${isCompleted ? `✔<del id="done-item-${index}">${text}</del>` : text}</span>
        <input type="button" id="remove-item-${index}" value="✕"/>
      <li>`
    ).join('')}`;
    this.targetEl.append(this.todoListEl);
  }

  this.render();
}
