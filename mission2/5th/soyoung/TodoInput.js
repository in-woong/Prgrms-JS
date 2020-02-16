function TodoInput($target) {
  this.$target = $target
  this.render = function() {
    this.$target.innerHTML = `
      <div>
        <input id="input" type="text" placeholder="할일 입력"></input>
        <button id="add">추가</button>
      </div>`
  }
  this.getInputValue = function() {
    return document.querySelector('#input').value
  }
  this.resetInputValue = function() {
    document.querySelector('#input').value = ''
    document.querySelector('#input').focus()
  }
  this.getInput = function() {
    return document.querySelector('#input')
  }
  this.getAddBtn = function() {
    return document.querySelector('#add')
  }
  this.render()
}
