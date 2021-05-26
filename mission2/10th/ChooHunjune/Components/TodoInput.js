export default function TodoInput({ $todoInputComponents, onTodoInput }) {

  this.$todoInput = $todoInputComponents.$todoInput
  this.$todoListClearBtn = $todoInputComponents.$todoListClearBtn
  this.$todoInputAddBtn = $todoInputComponents.$todoInputAddBtn

  const callOnTodoInput = () => {
    const text = this.$todoInput.value
    if (text) {
      onTodoInput(text)
      this.$todoInput.value = ''
    }
  }

  this.$todoInputAddBtn.addEventListener('click', (e) => {
    callOnTodoInput()
  })
  this.$todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      callOnTodoInput()
    }
  })
  
  
  this.render = () => {}
}
