import {useNewKeyword} from './validation.js'

/**
 * TodoCount 컴포넌트
 * @param $target
 * @param data
 * @constructor
 */
export default function TodoCount($target, data) {
  this.targetEl = $target;
  this.data = data;
  this.todoCountEl = document.createElement('ul')
  this.todoCountEl.classList.add("todo-count")

  this.validation = () => {
    useNewKeyword(this);
  }

  /**
   * update TodoCount to nextData
   * @param nextData
   */
  this.setState = (nextData) => {
    this.data = nextData;
    this.render();
  }

  /**
   * create TodoCount
   */
  this.render = () => {
    // 데이터 검증
    this.validation();

    this.todoCountEl.innerHTML=`
      <li>Todo: ${this.data.filter(({ text, isCompleted }) => !isCompleted ).length} 건<li>
      <li>Done: ${this.data.filter(({ text, isCompleted }) => isCompleted ).length} 건<li>`;
    this.targetEl.append(this.todoCountEl);
  }
  this.render()
}
