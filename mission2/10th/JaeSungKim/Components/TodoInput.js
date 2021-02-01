function TodoInput($form, addItem) {
  if (!(this instanceof TodoInput)) {
    return new TodoInput($target)
  }

  this.render = () => {
    const dataHTMLString = `
    <form>
      <input id="todo-input" type="text" placeholder="앞으로 할 작업" />
      <input id="todo-submit" type="submit" value="기록"/>
    </form>
    `
    $form.innerHTML = dataHTMLString
  }

  this.render()
  $form.addEventListener('submit', (event) => onSubmit(event, addItem, $inputField))

  const $inputField = document.querySelector('#todo-input')
  const $submitBtn = document.querySelector('#todo-submit')
  $submitBtn.addEventListener('click', (event) => onSubmitClick($inputField))
}

const onSubmit = (event, addItem, inputField) => {
  event.preventDefault()
  const newInputText = document.querySelector('#todo-input').value
  if (newInputText) {
    const newItem = {
      text: newInputText,
      isCompleted: false,
    }
    addItem(newItem)
    inputField.value = ''
  }
}

const onSubmitClick = (inputField) => {
  inputField.focus()
}

export default TodoInput
