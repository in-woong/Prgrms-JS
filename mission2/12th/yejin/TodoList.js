function TodoList($target, data) {
  this.$target = $target;
  this.data = data;

  this.render = function() {
    this.$target.innerHTML = this.data
      .map(todo => `<div id="${todo.id}" onClick=completeConfirm(${todo.id})>
                      ${todo.isCompleted ? `<span>✅(완료)</span>` : ''}
                      <span id='${todo.id}-span' style="padding-right:5px">${todo.text}</span>
                      <button onClick=removeElem(${todo.id})>X</button>
                    </div>`)
      .join('');
  }

  this.setState = function(nextData) {
    this.data = nextData;
    this.render();
  }

  this.render();
}



