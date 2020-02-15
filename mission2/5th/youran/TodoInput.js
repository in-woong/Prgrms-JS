function TodoInput(targetId,insertTodo) {
  this.$todoInput = document.querySelector(`#${targetId}`);
  this.insertTodo = insertTodo;

  this.$todoInput.addEventListener('keyup', e => {
    if(e.keyCode !== 13) return;
    if(!e.target.value) return;
    this.insertTodo(e.target.value);
    this.$todoInput.value = '';
  });
} 
