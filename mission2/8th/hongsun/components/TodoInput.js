import TodoRemoveButton from './TodoRemoveButton.js';

export default class TodoInput {
  constructor(targetEl, value, onChange, onKeyup, onRemoveAll) {
    this.targetEl = targetEl;
    this.value = value;
    this.onChange = onChange;
    this.onKeyup = onKeyup;
    this.onRemoveAll = onRemoveAll;
    this.render();
  }

  getTodoInputWrapperElement() {
    const inputWrapperEl = document.createElement('div');
    inputWrapperEl.id = 'todo-input-wrapper';
    return inputWrapperEl;
  }

  getTodoInputElement() {
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'text');
    inputEl.value = this.value;
    inputEl.addEventListener('input', this.onChange);
    inputEl.addEventListener('keyup', this.onKeyup);
    return inputEl;
  }

  setState(nextValue) {
    this.value = nextValue;
    this.render();
  }

  render() {
    const prevInput = this.targetEl.querySelector('input');
    prevInput && prevInput.remove();
    const todoInputWrapper = this.getTodoInputWrapperElement();
    const removeButton = document
      .getElementById('todo-input-wrpper')
      ?.querySelector('button');
    !removeButton && new TodoRemoveButton(todoInputWrapper, this.onRemoveAll);
    const todoInput = this.getTodoInputElement();
    todoInputWrapper.prepend(todoInput);
    this.targetEl.prepend(todoInputWrapper);
    todoInput.focus();
  }
}
