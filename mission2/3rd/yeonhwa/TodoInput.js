const $addListForm = document.querySelector('#addListForm');
const $inputList = document.querySelector('#inputList');

$addListForm.addEventListener('submit', e => {
  e.preventDefault()
  data.push({
    text: $inputList.value,
    isCompleted: false
  })
  $inputList.value = '';
  $inputList.focus();
  todoList.setState(data);
})