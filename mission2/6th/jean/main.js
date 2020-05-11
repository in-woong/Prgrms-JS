const data = [
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
const addBtn = document.querySelector('#add-button')

addBtn.addEventListener("click", function () {
  let newTodoText = document.querySelector('#todo-input')

  data.push(
    {
      text : newTodoText.value,
      isCompleted: false,
     }
  )

  todoList.setState(data)
  newTodoText.value = ""
})

$target.addEventListener("click", function (e) {
  const targetTagName = e.target.tagName

  if (targetTagName === "BUTTON") {
    const idx = e.target.parentNode.getAttribute('data-index')
    data.splice(idx, 1)
  } else if (targetTagName === "LI"){
    const idx = e.target.getAttribute('data-index')
    data[idx].isCompleted = true;
  }

  todoList.setState(data)
})
