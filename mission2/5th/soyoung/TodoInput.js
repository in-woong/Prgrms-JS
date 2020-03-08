const ENTER = 'Enter'
function TodoInput($target, { onEnter, onAdd, onReset }) {
  this.$target = $target
  this.onEnter = onEnter
  this.onAdd = onAdd
  this.onReset = onReset
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

    this.$input.addEventListener('keypress', e => {
      if (e.key === ENTER) {
        this.onEnter(e.target.value)
        e.target.value = ''
      }
    })
    this.$addBtn.addEventListener('click', e => {
      this.onAdd(this.$input.value)
      this.$input.value = ''
    })
    this.$reset.addEventListener('click', e => {
      this.onReset()
    })
  }
  this.render()
}
