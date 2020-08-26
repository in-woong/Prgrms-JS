export default class TodoInput {
  constructor(app) {
    this.app = app
  }
  render(target) {
    this.form = document.createElement('form')
    this.form.class = 'todo-input-form'
    target.appendChild(this.form)

    const userInput = this.form.appendChild(document.createElement('input'))
    userInput.type = 'text'
    userInput.placeholder = '할 일을 입력하세요'
    userInput.focus()

    const submitBtn = this.form.appendChild(document.createElement('input'))
    submitBtn.type = 'submit'
    submitBtn.value = '추가'

    const removeAllBtn = this.form.appendChild(document.createElement('button'))
    removeAllBtn.id = 'remove-all-btn'
    removeAllBtn.textContent = '모두 삭제'

    this.makeRemoveAllEvent(removeAllBtn);
  }

  handleUserInput(todoList){
    this.form.addEventListener('submit', e => {
      e.preventDefault()
      todoList.addTodoData(e.target[0].value)
      e.target[0].value = ''
    })
  }

  makeRemoveAllEvent(removeAllBtn) {
    const event = new Event('remove-all')
    removeAllBtn.addEventListener('click', function(){
      removeAllBtn.dispatchEvent(event)
    })
    // removeAllBtn.addEventListener(
    //   'remove-all',
    //   this.app.removeAll(),
    //   false
    // )

    // removeAllBtn.dispatchEvent(event)
  }
}
