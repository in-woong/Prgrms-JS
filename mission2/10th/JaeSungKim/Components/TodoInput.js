function TodoInput($form, addItem) {
  if (!(this instanceof TodoInput)) {
    return new TodoInput($target)
  }

  this.render = () => {
    $form.innerHTML = `
    <form>
      <input id="todo-input" type="text" placeholder="앞으로 할 작업" />
      <input id="todo-submit" type="submit" value="기록"/>
    </form>
    `
  }

  this.render()

  const $inputField = document.querySelector('#todo-input')
  const $submitBtn = document.querySelector('#todo-submit')

  $form.addEventListener('submit', (event) => {
    event.preventDefault()
    const newInputText = document.querySelector('#todo-input').value
    if (newInputText) {
      const newItem = {
        text: newInputText,
        isCompleted: false,
      }
      addItem(newItem)
      $inputField.value = ''
    }
  })

  $submitBtn.addEventListener('click', (event) => {
    $inputField.focus()
  })
}

export default TodoInput
