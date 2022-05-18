import { REMOVE_ALL } from '../../constant/CustomEventType.js';
import { createEl } from '../../util/createEl.js';
import { $ } from '../../util/selector.js';

export function TodoInput({ $target, onSubmit, onRemoveAll }) {
  this.$inputFormEl = createEl('form', 'todo-form');
  this.$inputLabelEl = createEl('label', 'todo-label');
  this.$inputEl = createEl('input', 'todo-input');
  this.$inputEl.type = 'text';
  this.$inputEl.placeholder = '할 일을 입력하세요';
  this.$removeAllEl = createEl('button', 'remove-all-btn', 'Remove All');
  this.$removeAllEl.type = 'button';

  this.$inputFormEl.appendChild(this.$inputLabelEl);
  this.$inputLabelEl.appendChild(this.$inputEl);
  this.$inputFormEl.appendChild(this.$removeAllEl);
  $target.appendChild(this.$inputFormEl);

  if (!new.target)
    throw new Error('TodoInput is not supposed to be instantiated directly');

  this.$inputFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = this.$inputFormEl.querySelector('.todo-input').value;

    if (todoText.trim().length > 0) {
      onSubmit(todoText);
      this.$inputEl.value = '';
    }
  });

  this.$inputFormEl.addEventListener('click', (e) => {
    if (
      e.target.className === 'remove-all-btn' &&
      confirm('ToDo를 모두 삭제 하시겠습니까?')
    ) {
      const customEvent = new CustomEvent(REMOVE_ALL);
      window.dispatchEvent(customEvent);
    }
  });
}
