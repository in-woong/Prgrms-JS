var data = [
  {
    text: 'JS 공부하기',
    isCompleted: false,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  }
]

const $target = document.querySelector('#todo-list')
const todoList = new TodoList($target, data)
const $todoList = document.querySelector('#todo-list')
const $todoAddBtn = document.querySelector('#todo-add-btn')
const $todoInput = document.querySelector('#todo-input')
const $todoDelBtns = document.querySelectorAll('.todo-del-btn')

$todoList.addEventListener('click', e => {
  if (e.target.className === "todo-text") {
    data[e.target.id].isCompleted = true;
    todoList.setState(data)
  }
  else if (e.target.className === "todo-del-btn") {
    data.splice(e.target.id, 1)
    todoList.setState(data)
  }
})

$todoAddBtn.addEventListener('click', () => {
  addTodo();
});

$todoInput.addEventListener('keydown', e => {
  if (e.key === "Enter") {
    addTodo();
  }
});

addTodo = () => {
  if ($todoInput.value) {
    data.push({text: $todoInput.value, isCompleted: false});
    todoList.setState(data);
    $todoInput.value = '';
    $todoInput.focus();
  } else {
    throw new Error('할 일을 입력해주세요.');
  }
}
