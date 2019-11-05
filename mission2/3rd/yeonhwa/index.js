const todoList = new TodoList(data, $todoList);

todoList.render();

const $addListForm = document.querySelector('#addListForm');
const $inputList = document.querySelector('#inputList');

$addListForm.addEventListener('submit', e => {
  e.preventDefault()
  data.push({
    text: $inputList.value,
    iisCompleted: false
  })
  $inputList.value = '';
  $inputList.focus();
  todoList.setState(data);
})