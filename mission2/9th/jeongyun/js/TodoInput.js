import { useNewKeyword } from './validation.js'

/**
 * TodoInput 컴포넌트
 * @param $target
 * @constructor
 */
export default function TodoInput($target) {
  this.data = '';
  this.targetEl = $target;
  this.todoFormEl = document.createElement('form')
  this.todoFormEl.classList.add("todo-form")

  this.validation = () => {
    useNewKeyword(this);
  }
  /**
   * update TodoInput
   * @param nextData
   */
  this.setState = (nextData) => {
    if (nextData) {
      this.data = nextData;
      this.render();
    }
    if (!nextData) {
      this.todoFormEl.reset();
    }
  }

  this.getState = () => {
    return  document.getElementsByTagName("input")[0].value;
  }

  /**
   * create TodoInput
   */
  this.render = () => {
    // 데이터 검증
    this.validation();

    // todo-input 생성
    this.todoFormEl.innerHTML =` <form>
        <span>
          <input type="text" id="todo-input" placeholder="할 일을 입력하세요."/>
          <button type="reset">✕</button>
        </span>
        <button type="submit">submit</button>
        <button type="button" id="removeAll">removeAll</button>
    </form>`;
    this.targetEl.append(this.todoFormEl);
    // todo-input 포커스
    document.querySelector("#todo-input" ).focus();
  }

  this.render();
}
