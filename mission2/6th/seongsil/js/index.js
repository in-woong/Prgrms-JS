const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

const $target = document.querySelector('#todo-list');
const todoList = new TodoList($target, data);
const $todoInput = document.querySelector('#todo-input');
const $addTodoButton = document.querySelector('#add-todo-button');

function addTodoList(todoText) {
  data.push(todoText);
  todoList.setState(data);
  $todoInput.value = '';
  $todoInput.focus(); // input에 입력해서 추가 후에, 추가적인 조작없이 바로 새로운 Todo를 입력할 수 있도록 포커스
}

$todoInput.addEventListener('keypress', (event) => {
  if (event.keyCode === 13 && $todoInput.value) {
    // 엔터키 입력으로 처리
    const newTodoData = {
      text: $todoInput.value,
      isCompleted: false
    };
    addTodoList(newTodoData);
  }
});

$addTodoButton.addEventListener('click',()=> {
  // 버튼 클릭 시 추가

  if (!$todoInput.value) {
    alert('할일을 입력해주세요.');
    return false;
  }

  const newTodoData = {
    text: $todoInput.value,
    isCompleted: false
  };
  addTodoList(newTodoData);
});
