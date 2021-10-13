import todosValidation from './validate.js';

class TodoList {
  constructor(todos, elementId) {
    todosValidation(todos);
    this.todos = todos;
    this.elementId = elementId;
  }

  createTodosWrapperElement() {
    const div = document.createElement('div');

    div.setAttribute('id', this.elementId.replace(/#/, ''));
    document.body.appendChild(div);

    return this;
  }

  createTodosElement() {
    return `<ul>${this.todos
      .reduce((elements, { isCompleted, text }) => {
        if (isCompleted) {
          return `${elements}<li><del>${text}</del></li>`;
        }

        return `${elements}<li>${text}</li>`;
      }, '')}</ul>`;
  }

  setState(newTodos) {
    todosValidation(newTodos);
    this.todos = newTodos;
    this.render();
  }

  render() {
    document.querySelector(this.elementId).innerHTML = this.createTodosElement();
  }
}

export default TodoList;
