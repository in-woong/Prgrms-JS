import { $ } from '../helpers.js';
export function TodoInput() {
  this.$parentEl = $('.input--form');
  this.$input = $('.input--todo');
  this.$removeAllBtn = $('.removeAll--btn');

  this.getValue = function () {
    const inputValue = this.$input.value;
    this.clearInput();
    return inputValue;
  };

  this.clearInput = function () {
    this.$input.value = '';
  };

  this.addHandlerRemoveAll = function (handler) {
    this.$removeAllBtn.addEventListener('click', (e) => {
      const evnetRemoveAll = new CustomEvent('removeAll', {
        bubbles: true,
        detail: { removeAll: handler },
      });

      if (
        e.target.className === 'removeAll--btn' &&
        confirm('ToDo를 모두 삭제 하시겠습니까?')
      )
        e.target.dispatchEvent(evnetRemoveAll);
    });

    this.$removeAllBtn.addEventListener('removeAll', function (e) {
      e.detail.removeAll();
    });
  };

  this.addHandlerSubmit = function (handler) {
    this.$parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  };
}
