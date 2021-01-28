import { getTargetElement } from './validationUtil.js';

function TodoInput(targetElementId, addTodo) {
  this.target = getTargetElement(targetElementId);

  this.target.addEventListener('keypress', addTodo);
};

export default TodoInput;
