import { useNewKeyword, useArrayState, checkTypes } from './validation.js'
import TodoCount from './TodoCount.js';

function TodoList(data, removeTodo, toggleTodo) {
  this.data = data;

  const $target = document.querySelector('#todo-list');

  this.validation = (state) => {
    useNewKeyword(this)
    useArrayState(state)
    checkTypes(state, ({ text, isCompleted }) => typeof text === 'string' && typeof isCompleted === 'boolean')
  }

  this.todoEventController = (e) => {
    if (e.target.className === 'todo-remove-btn') {
      const index = e.target.parentNode.getAttribute('key');
      removeTodo(index);
    } else if (e.target.className === 'todo-item') {
      const index = e.target.getAttribute('key');
      toggleTodo(index);
    } else if (e.target.parentNode.className === 'todo-item') {
      const index = e.target.parentNode.getAttribute('key');
      toggleTodo(index);
    }
  }

  this.render = () => {
    const content =
      this.data.length > 0 ?
        `<ul>
      ${this.data.map(({ text, isCompleted }, index) =>
          isCompleted ? `<li key=${index} class="todo-item"><s>${text}</s><button type="button" class="todo-remove-btn">삭제</button></li>` : `<li key=${index} class="todo-item">${text}<button type="button" class="todo-remove-btn">삭제</button></li>`).join('')}</ul>` : '';
    $target.innerHTML = content;
    $target.addEventListener('click', this.todoEventController);
    this.todoCount = new TodoCount(this.data);
  }

  this.setState = (nextState) => {
    this.validation(nextState)
    this.data = nextState;
    this.render();
  }

  this.validation(this.data)
  this.render();
}

export default TodoList;

