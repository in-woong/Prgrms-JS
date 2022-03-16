function TodoInput($target, addTodo) {
  this.$target = $target
  this.addTodo = addTodo
  this.$todoForm = document.createElement('form')

  this.$target.append(this.$todoForm)

  const onSubmit = (event) => {
    event.preventDefault()
    const input = this.$todoForm.querySelector('input')
    if (input.value === '') {
      alert('값을 입력해주세요.')
      return
    }
    this.addTodo(input.value)
    input.value = ''
  }

  this.render = () => {
    this.$todoForm.innerHTML = `<input id="todo-input" type="text"/> <button type="submit">추가</button> <button id="remove-all" type="button">전체삭제</button>`
    this.$todoForm
      .querySelector('#remove-all')
      .addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('removeTodoAll'))
      })
    this.$todoForm.addEventListener('submit', onSubmit)
  }
  this.render()
}
