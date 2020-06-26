import { ENTER_KEY_CODE } from '../utils/constant.js';

function TodoInput($target, data, { onAddTodoItem }) {
  this.todoData = data;

  if (!new.target) {
    throw new Error('TodoInput을 new로 사용해야 합니다.');
  }

  const removeAllEvent = new CustomEvent('todoRemoveAll');

  this.render = () => {
    $target.insertAdjacentHTML('beforebegin', `<form>
      <input type="text" id="todo-input" placeholder="할 일을 입력하세요" />
      <button type="submit" id="add-todo-button">추가</button>
      <button type="button" id="remove-all-button">전체 삭제</button>
    </form>`);

    const $todoInput = document.querySelector('#todo-input');
    const $addTodoButton = document.querySelector('#add-todo-button');
    const $removeAllButton = document.querySelector('#remove-all-button');

    function resetInputData() {
      $todoInput.value = '';
      $todoInput.focus(); // input에 입력해서 추가 후에, 추가적인 조작없이 바로 새로운 Todo를 입력할 수 있도록 포커스
    }

    this.addData = () => {
      if (!$todoInput.value) {
        alert('할 일을 입력해주세요.');
        return false;
      }

      onAddTodoItem($todoInput.value);
      resetInputData();
    }

    $todoInput.addEventListener('keypress', event => {
      if (event.keyCode === ENTER_KEY_CODE) {
        // 엔터키 입력으로 처리
        event.preventDefault();
        this.addData();
      }
    });

    $addTodoButton.addEventListener('click',event => {
      // 버튼 클릭 시 추가
      this.addData();
    });

    $removeAllButton.addEventListener('click', event => {
      $target.dispatchEvent(removeAllEvent);
    });
  }

  this.render();
}

export default TodoInput;
