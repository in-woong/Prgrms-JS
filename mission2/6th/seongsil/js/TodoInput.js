function TodoInput($target, data, { onAddTodoItem }) {
  this.$target = $target;
  this.todoData = data;

  if (!new.target) {
    throw new Error('TodoList를 new로 사용해야 합니다.');
  }

  this.render = () => {
    this.$target.insertAdjacentHTML('beforebegin', `<section>
      <input type="text" id="todo-input" placeholder="할 일을 입력하세요" />
      <button type="button" id="add-todo-button">추가</button>
    </section>`);

    const $todoInput = document.querySelector('#todo-input');
    const $addTodoButton = document.querySelector('#add-todo-button');

    function resetInputData() {
      $todoInput.value = '';
      $todoInput.focus(); // input에 입력해서 추가 후에, 추가적인 조작없이 바로 새로운 Todo를 입력할 수 있도록 포커스
    }

    $todoInput.addEventListener('keypress', (event) => {
      if (event.keyCode === 13) {
        // 엔터키 입력으로 처리
        if (!$todoInput.value) {
          alert('할 일을 입력해주세요.');
          return false;
        }

        onAddTodoItem($todoInput.value);
        resetInputData();
      }
    });

    $addTodoButton.addEventListener('click',(event)=> {
      // 버튼 클릭 시 추가
      if (!$todoInput.value) {
        alert('할 일을 입력해주세요.');
        return false;
      }

      onAddTodoItem($todoInput.value);
      resetInputData();
    });

  }

  this.render();
}

export default TodoInput;
