function TodoInput({
  $app,
  inputSelector,
  onAddTodoList,
  removeAllSelector,
  //eventTrigger,
}) {
  console.log('TodoInput 컴포넌트')
  this.$todoInput = inputSelector
  this.onAddTodoList = onAddTodoList
  //this.eventTrigger = eventTrigger

  this.$todoInput.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return
    if (!e.target.value || e.target.value.trim() == '') {
      alert('값을 입력해 주세요')
      return
    }
    this.onAddTodoList(e.target.value)
    this.$todoInput.value = ''
  })

  this.$removeAllButton = removeAllSelector
  this.$removeAllButton.addEventListener('click', (e) => {
    $app.dispatchEvent(new CustomEvent('removeAll'))
  })
}

export default TodoInput
