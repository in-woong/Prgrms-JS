function TodoInput(targetElement, addTodo) {
  this.target = targetElement;

  this.target.addEventListener('keypress', addTodo);
};

export default TodoInput;
