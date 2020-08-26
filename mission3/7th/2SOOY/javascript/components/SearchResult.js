import { checkTarget, checkNode, checkTypeArray } from '../utils/validator.js';
import { NODE, MESSAGE } from '../utils/constant.js';

function SearchResult($target, jjalData, isInputEmpty) {
  this.init = () => {
    checkTarget($target);
    checkNode($target, NODE.DIV);
    checkTypeArray(jjalData);

    this.$target = $target;
    this.jjalData = jjalData;
    this.isInputEmpty = isInputEmpty;

    this.render();
  };

  this.render = () => {
    if (this.isInputEmpty) {
      this.$target.innerHTML = '';
    } else {
      this.$target.innerHTML = this.jjalData.length
        ? this.getItemListHTML(this.jjalData)
        : MESSAGE.NO_RESULT;
    }
  };

  this.getItemListHTML = (jjalData) => {
    return (
      jjalData.reduce((html, item) => {
        html += this.getItemHTML(item);
        return html;
      }, '<ul>') + '</ul>'
    );
  };

  this.getItemHTML = ({ title, imageUrl }) => {
    return `<li class="jjal-border">
      <span class="jjal-title">${title}</span>
      <img class="responsive-img" src="${imageUrl}" alt="${title}" />
    <li>`;
  };

  this.setState = (nextState) => {
    const { jjals, isInputEmpty } = nextState;

    this.jjalData = jjals;
    this.isInputEmpty = isInputEmpty;
    this.render();
  };

  this.init();
}

export default SearchResult;
