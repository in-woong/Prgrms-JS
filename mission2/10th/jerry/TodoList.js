function TodoList($target, data) {
  if (!new.target) {
    throw new Error('new 키워드를 사용해주세요.');
  }
  if (data === null || data === undefined
    || !Array.isArray(data)) {
    throw new Error('올바른 데이터를 전달해주세요');
  }
  this.$target = $target
  this.data = data

  this.render = function() {
    this.$target.innerHTML = this.data
      .map((todo, idx) => 
        todo.isCompleted ? 
        `<div><span id=${idx} class="todo-text"><s>${todo.text}</s><span><button id=${idx} class="todo-del-btn">삭제</button></div>` :
        `<div ><span id=${idx} class="todo-text">${todo.text}<span><button id=${idx} class="todo-del-btn">삭제</button></div>`
        )
      .join('')
  }



  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}


