function TodoInput($target) {
  this.$target = $target;

  this.render = function() {
    this.$target.innerHTML = 
      `<input id="todo-input" type="text" placeholder="할 일 입력" autofocus required>
        <button id="todo-add-btn">추가</button>`
  }

  this.render()
  
}
