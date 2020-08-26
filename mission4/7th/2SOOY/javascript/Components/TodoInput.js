import {
  checkTarget,
  checkNode,
  checkTypeFunction,
} from '../utils/validator.js';
import { NODE } from '../utils/constant.js';
import { SELECTOR } from '../utils/constant.js';

function TodoInput({ $target, onAddTodo }) {
  this.init = () => {
    checkTarget($target);
    checkNode(NODE.SECTION);
    checkTypeFunction(onAddTodo);

    this.$target = $target;

    this.$inputText = this.$target.querySelector(SELECTOR.TODO_INPUT_TEXT);
    this.$addButton = this.$target.querySelector(SELECTOR.ADD_BUTTON);
    this.$removeAllButton = this.$target.querySelector(
      SELECTOR.REMOVE_ALL_BUTTON
    );

    this.bindEvents();
  };

  this.bindEvents = () => {
    this.$addButton.addEventListener('click', this.onAdd);
    this.$inputText.addEventListener('keypress', this.onAdd);
  };

  this.onAdd = (e) => {
    const content = this.$inputText.value.trim();
    if (!content) return;

    if (
      e.target.nodeName === 'BUTTON' ||
      (e.target.nodeName === 'INPUT' && e.key === 'Enter')
    ) {
      onAddTodo(content);
      this.$inputText.value = '';
    }
  };

  this.init();
}

export default TodoInput;
