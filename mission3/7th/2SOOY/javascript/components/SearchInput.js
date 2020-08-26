import { debounce } from '../utils/util.js';
import {
  checkTarget,
  checkNode,
  checkTypeFunction,
} from '../utils/validator.js';
import { DELAY, NODE } from '../utils/constant.js';

function SearchInput($target, onSearhcKeyword) {
  this.init = () => {
    checkTarget($target);
    checkNode($target, NODE.INPUT);
    checkTypeFunction(onSearhcKeyword);

    this.$target = $target;

    this.bindEvents();
  };

  this.bindEvents = () => {
    this.$target.addEventListener('keyup', debounce(this.onKeyUp, DELAY.INPUT));
  };

  this.onKeyUp = (e) => {
    const keyword = e.target.value.trim();
    onSearhcKeyword(keyword);
  };

  this.init();
}

export default SearchInput;
