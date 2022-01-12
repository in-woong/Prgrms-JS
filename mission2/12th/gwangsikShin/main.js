var data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

const $target = document.querySelector('#todo-list')
const todoList = new TodoList($target, data)

todoList.render();

const $todoInput = document.querySelector("#todo-input");

const todoInput = (e) => {
  console.log(e.key)
  if(e.key === 'Enter') {
    console.log(1);
    data.push(
      {
        text: `${e.target.value}`,
        isCompleted: false,
      }
    );
  todoList.render();
  $todoInput.value = '';
  }
}

$todoInput.addEventListener("keypress", todoInput);