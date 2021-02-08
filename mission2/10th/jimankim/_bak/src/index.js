class TodoInput {
  /**
   *
   * @param {String} target
   * @param {Function} addTodo
   */
  constructor({ target, addTodo }) {
    this.$target = target; //input-todo
    this.state = ''; // 빈 값
    this.addTodo = addTodo; // addTodo 함수
    this.$target.focus(); //처음 커서 진입
    this.initEventListner(); //initEventListner 함수연결
  }

  initEventListner() {
    this.$target.addEventListener('input', this.onInput.bind(this));
    this.$target.addEventListener('keypress', this.onSubmit.bind(this));
    this.$target.nextElementSibling.addEventListener('click', this.onClick.bind(this));
  }

  onInput(e) {
    e.preventDefault(); // 상위 이벤트 전이 금지
    this.setState(e.target.value); // 값을 state에 대입
  }

  onSubmit(e) {
    if (e.key !== 'Enter') return; // 엔터키가 아니면 리턴 (엔터키만 유효함)
    if (this.state.length === 0) return; // state의 값이 하나도 없다면 리턴
    this.addTodo({ text: this.state, isCompleted: false }); //state에 배열형태로 입력된 값 저장
    this.setState(''); // 텍스트상자에 입력된 값 초기화
  }

  onClick(e) {
    if (this.state.length === 0) {
      alert('값을 입력해주세요.');
      this.$target.focus();
      return;
    }
    this.addTodo({ text: this.state, isCompleted: false });
    this.setState('');
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    this.$target.value = this.state;
  }
}

class TodoList {
  /**
   *
   * @param {String} target
   * @param {Array} initialData
   */
  constructor({ target, initialData = [] }) {
    this.$target = target;
    this.$target.addEventListener('click', this.onClick.bind(this));
    this.state = initialData;
    this.render();
  }

  toggleComplete(target) {
    const index = parseInt(target.parentNode.dataset.index);
    const { text, isCompleted } = this.state[index];
    // 문법이 뭔지 모르겠음

    this.setState([
      ...this.state.slice(0, index),
      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters
      {
        text,
        isCompleted: !isCompleted,
      },
      ...this.state.slice(index + 1),
    ]);
  }

  delete(target) {
    const index = parseInt(target.parentNode.dataset.index);
    this.setState([...this.state.slice(0, index), ...this.state.slice(index + 1)]);
  }

  onClick(event) {
    const action = event.target.dataset.action;
    if (!action) return;
    this[action](event.target);
  }

  setState(newData) {
    this.state = newData;
    this.render();
  }

  render() {
    this.$target.innerHTML = this.state.reduce((htmlString, { text, isCompleted }, index) => htmlString + `<li data-index=${index}><span data-action="toggleComplete" class=${isCompleted ? 'complete' : ''}>${text}</span>&nbsp;<button data-action="delete">삭제</button></li>`, '') || '';
  }
}

const todoList = new TodoList({
  target: document.getElementById('todo-list'),
});

new TodoInput({
  target: document.getElementById('input-todo'),
  addTodo: (todo) => {
    todoList.setState([...todoList.state, todo]);
  },
});
