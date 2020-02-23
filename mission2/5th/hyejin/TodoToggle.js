function TodoToggle($target, { onTodoToggle }) {
  $target.addEventListener('click', e => {
    console.log(e.target.dataset.id)
    onTodoToggle(e.target.dataset.id)
  })
}
