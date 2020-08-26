import { SELECTOR } from '../utils/constant.js';
import {
  checkTarget,
  checkFormNode,
  checkInputNode,
  checkButtonNode,
  checkTypeFunction,
} from '../utils/validator.js';

function TodoInput($target, $app, onAddTodo) {
  this.init = () => {
    checkTarget($target);
    checkFormNode($target);
    this.$target = $target;

    const $inputElement = $target.querySelector(SELECTOR.INPUT_TEXT);
    checkInputNode($inputElement);
    this.$inputElement = $inputElement;

    const $removeAllButton = $target.querySelector(SELECTOR.REMOVE_ALL_BUTTON);
    checkButtonNode($removeAllButton);
    this.$removeAllButton = $removeAllButton;

    checkTypeFunction(onAddTodo);

    this.bindEvents();
  };

  this.bindEvents = () => {
    this.$target.addEventListener('submit', (e) => this.onSubmit(e));
    this.$removeAllButton.addEventListener('click', () => this.removeAll());
  };

  this.removeAll = () => {
    const removeAll = new CustomEvent('@removeAll');
    $app.dispatchEvent(removeAll);
  };

  this.onSubmit = (e) => {
    e.preventDefault();

    const inputValue = this.$inputElement.value.trim();
    if (!inputValue.length) return;

    onAddTodo(inputValue);
    this.$inputElement.value = '';
    this.$inputElement.focus();
  };

  this.init();
}

export default TodoInput;
