import { REMOVE_ALL } from './CustomEventType.js';

export default function TodoInput({ $target, onSubmit }) {
  this.$element = document.createElement('form');

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
      <input type="text" placeholder="할일을 입력하세요">
      <button type="button" class="remove-all">Remove All</button>
    `;
  };

  this.$element.addEventListener('submit', (e) => {
    e.preventDefault();
    const $input = this.$element.querySelector('input');
    const todoText = $input.value;

    if (todoText.length > 0) {
      onSubmit(todoText);
      $input.value = '';
    }
  });

  this.$element.addEventListener('click', (e) => {
    if (e.target.className === 'remove-all') {
      // custom 이벤트 발생시키기!!
      const customEvent = new CustomEvent(REMOVE_ALL);
      window.dispatchEvent(customEvent);
    }
  });

  this.render();
}
