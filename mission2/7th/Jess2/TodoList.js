function TodoList (data) {
  this.data = data;
  const $TODO_LIST = document.getElementById('todo-list');
  const $TODO_INPUT = document.getElementById('todo-input');
  const $TODO_ADD_BUTTON = document.getElementById('todo-add-button');

  // list click 이벤트 리스너 등록
  $TODO_LIST.addEventListener('click', (e) => {
    const $TARGET = e.target;
    const index = Array.from($TODO_LIST.childNodes).indexOf($TARGET.closest('li'));

    if ($TARGET.classList.contains('complete-button')) {
      this.setIsCompletedTodo(index);
    }
  });

  // add button 이벤트 리스너 등록
  $TODO_ADD_BUTTON.addEventListener('click', (e) => {
    const newTodo = {
      text: $TODO_INPUT.value,
      isCompleted: false,
    }

    this.createTodo(newTodo);
  });

  // 할 일 완료 처리
  this.setIsCompletedTodo = function (index) {
    this.data[index].isCompleted = !this.data[index].isCompleted;
    this.render();
  }

  // 새 할 일 생성
  this.createTodo = function (newTodo) {
    this.data.push(newTodo);
    this.initInput();
    this.render();
  }

  // 입력창 초기화
  this.initInput = function () {
    $TODO_INPUT.value = '';
  }

  this.render = function () {
    $TODO_LIST.innerHTML = this.createTodoHTMLString();
  }

  this.createTodoHTMLString = function () {
    return this.data.map((todoItem) => {
      return `<li>${todoItem.isCompleted ? `<s>${todoItem.text}</s>` : todoItem.text} <button class="complete-button">✔️</button></li>`
    }).join('');
  }

  this.render();
}

