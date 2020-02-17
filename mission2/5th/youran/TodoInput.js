function TodoInput(selector,insertTodo) {

  const ENTER_KEYCODE = 13;

  this.$todoInput = document.querySelector(`${selector}`);
  this.insertTodo = insertTodo;

  this.$todoInput.addEventListener('keyup', e => {
    if(e.keyCode !== ENTER_KEYCODE || !e.target.value) return;
    this.insertTodo(e.target.value);
    this.$todoInput.value = '';
  });
} 
