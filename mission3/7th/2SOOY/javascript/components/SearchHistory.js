import { debounce } from '../utils/util.js';
import {
  checkTarget,
  checkNode,
  checkTypeFunction,
  checkTypeArray,
} from '../utils/validator.js';
import { DELAY, NODE, MESSAGE } from '../utils/constant.js';

function SearchHistory($target, histories, onSearchKeyword) {
  this.init = () => {
    checkTarget($target);
    checkNode($target, NODE.DIV);
    checkTypeArray(histories);
    checkTypeFunction(onSearchKeyword);

    this.$target = $target;
    this.histories = histories;

    this.bindEvents();
    this.render();
  };

  this.bindEvents = () => {
    this.$target.addEventListener('click', debounce(this.onClick, DELAY.CLICK));
  };

  this.onClick = (e) => {
    if (e.target.nodeName !== 'LI') return;

    const keyword = e.target.textContent;
    onSearchKeyword(keyword);
  };

  this.render = () => {
    this.$target.innerHTML = this.histories.length
      ? this.getListItemHTML(this.histories)
      : MESSAGE.NO_HISTORY;
  };

  this.setState = (nextHistories) => {
    this.histories = nextHistories;

    this.render();
  };

  this.getItemHTML = (keyword) => {
    return `<li class="keyword-item">${keyword}<li>`;
  };

  this.getListItemHTML = (histories) => {
    return (
      histories.reduce((html, item) => {
        html += this.getItemHTML(item);
        return html;
      }, '<ul class="keyword-list">') + '</ul>'
    );
  };

  this.init();
}

export default SearchHistory;
