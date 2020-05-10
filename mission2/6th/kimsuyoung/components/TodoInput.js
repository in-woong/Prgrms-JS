function TodoInput(props) {
  console.log('TodoInput 컴포넌트')
  this.$todoInput = document.querySelector(props.inputSelector)
  this.onAddTodoList = props.onAddTodoList
  this.eventTrigger = props.eventTrigger

  this.$todoInput.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return
    if (!e.target.value || e.target.value.trim() == '') {
      alert('값을 입력해 주세요')
      return
    }
    this.onAddTodoList(e.target.value)
    this.$todoInput.value = ''
  })

  this.$removeAllButton = document.querySelector(props.removeAllSelector)
  this.$removeAllButton.addEventListener('click', (e) => {
    const removeAllEvent = new CustomEvent('removeAll')
    this.eventTrigger(removeAllEvent)
    // todolist 컴포넌트에 있는 이벤트 트리거
    // const eventTrigger = (event) => this.todoList.$todoList.dispatchEvent(event)
  })
}

export default TodoInput
