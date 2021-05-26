export default function TodoInput(params) {
  const $target = params.$target
  const onClick = params.onClick

  document
    .querySelector("#add-todo-button")
    .addEventListener('click', async function (e) {
      const todoText = document.querySelector('#todo-input').value;
      onClick(todoText)
    })

  if (!new.target) {
    throw new Error("error message, Please attach the 'new' to do constructor")
  }
  if (!$target) {
    throw new Error("error message, Iillegal Dom Selector")
  }

  this.setState = (newData) => {
    this.render();
  }

  this.render = function () {
    $target.value = "";
  }
  this.render();
}