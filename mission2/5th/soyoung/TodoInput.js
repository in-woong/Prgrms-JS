const ENTER = 'enter'
function TodoInput($target, data) {
  this.$target = $target
  this.onEnter = data.onEnter
  this.onAdd = data.onAdd
  this.onReset = data.onReset
  this.render = function() {
    this.$target.innerHTML = `
      <div>
        <input id="input" type="text" placeholder="할일 입력"></input>
        <button id="add">추가</button>
        <button id="reset">초기화</button>
      </div>`
    this.$input = $target.querySelector('#input')
    this.$addBtn = $target.querySelector('#add')
    this.$reset = $target.querySelector('#reset')
  }
  this.getInputValue = function() {
    return this.$input.value
  }
  this.resetInputValue = function() {
    this.$input.value = ''
    this.$input.focus()
  }
  this.render()
  this.$input.addEventListener('keypress', e => {
    if (e.key === ENTER) {
      this.onEnter(e.target.value)
    }
  })
  this.$addBtn.addEventListener('click', e => {
    this.onAdd(this.getInputValue())
  })
  this.$reset.addEventListener('click', e => {
    this.onReset()
  })
}
