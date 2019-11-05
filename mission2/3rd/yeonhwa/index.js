const todoList = new TodoList(data, $todoList);

todoList.render();

const $addListForm = document.querySelector('#addListForm');
const $inputList = document.querySelector('#inputList');
const $deleteBtn = document.getElementsByClassName('deleteBtn');
const $list = document.getElementsByClassName('list');

$addListForm.addEventListener('submit', e => {
  e.preventDefault()
  data.push({
    index: data.length,
    text: $inputList.value,
    isCompleted: false
  })
  $inputList.value = '';
  $inputList.focus();
  todoList.setState(data);
})

// $deleteBtn.addEventListener('click', e =>{
//   const $deleteList = e.target.parentNode;
//   data.splice($deleteList.id,1);
//   todoList.setState(data);
// })

// document.querySelector('.list').addEventListener('click', e => {
//   const check = data[parseInt(e.target.parentNode.id)].isCompleted;
//   data[parseInt(e.target.parentNode.id)].isCompleted = check ? false : true;
//   todoList.setState(data);
// })


const deleteList = node => {
  const $deleteList = node.parentNode;
  data.splice($deleteList.id, 1);
  todoList.setState(data);
}

const checkList = node => {
  const check = data[parseInt(node.parentNode.id)].isCompleted;
  data[parseInt(node.parentNode.id)].isCompleted = check ? false : true;
  todoList.setState(data);
}
