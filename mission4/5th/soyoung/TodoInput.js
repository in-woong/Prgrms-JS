function TodoInput(params) {
  this.$target = params.$target
  this.onAdd = params.onAdd
  this.render = function() {
    this.$target.innerHTML = `
    <input type="text"  />
    <button type="button" id="add-todo-button">
      Add
    </button>`
    this.input = this.$target.querySelector('input')
    this.button = this.$target.querySelector('button')
    this.button.addEventListener('click', () => {
      this.onAdd(this.input.value)
      this.input.value = ''
      this.input.focus()
    })
  }
  this.render()
}
