function TodoInput(targetId,insertTodo) {

  const ENTER_KEYCODE = 13;

  this.$todoInput = document.querySelector(`#${targetId}`);
  this.insertTodo = insertTodo;

  this.$todoInput.addEventListener('keyup', e => {
    if(e.keyCode !== ENTER_KEYCODE || !e.target.value) return;
    this.insertTodo(e.target.value);
    this.$todoInput.value = '';
  });
} 
