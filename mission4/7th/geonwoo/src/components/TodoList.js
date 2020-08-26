import { bindEvent } from '../utils/index.js';
class TodoList {
  constructor(target, todos, todoListEvent, onToggle) {
    this.$target = target;
    this.todos = todos;
    this.onToggle = onToggle;

    this.$target.addEventListener('drop', this.drop);
    this.$target.addEventListener('dragover', this.dragOver);
    this.$target.addEventListener('dragstart', this.dragStart);
    bindEvent(this.$target, 'click', todoListEvent);
  }

  setState(newTodos) {
    if (this.todos === newTodos) return;

    this.todos = newTodos;
    this.render();
  }
  render() {
    this.$target.innerHTML = this.todos
      .map(
        (todo) => `<li id=${todo._id} class=${
          todo.isCompleted ? 'toggle' : ''
        } draggable="true">
        ${todo.content}
      <button>X</button></li>`
      )
      .join('');
  }
  dragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.dropEffect = 'move';
  };
  dragOver = (e) => {
    e.preventDefault();
    if (e.target.tagName !== ' UL') return;
    e.dataTransfer.dropEffect = 'move';
  };
  drop = (e) => {
    e.preventDefault();
    if (e.target.tagName === 'UL') {
      const todoId = e.dataTransfer.getData('text/plain');
      const todo = document.getElementById(todoId);
      todo.className = todo.className === 'toggle' ? '' : 'toggle';
      e.target.appendChild(todo);
      this.onToggle(todoId);
    }
  };
}

export default TodoList;
