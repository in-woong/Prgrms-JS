import { createDOMElement } from '../util/index.js';

export default class SearchHistory {
  constructor({ $target, initialState, searchData }) {
    this.$target = $target;
    this.container = createDOMElement('ul', [
      { attr: 'class', value: 'search-history' },
    ]);
    this.render();
    this.state = initialState;
    this.histoyClickListener = this.histoyClickListener.bind(this);
    this.container.addEventListener('click', this.histoyClickListener);
    this.searchData = searchData;
  }

  render() {
    this.$target.appendChild(this.container);
  }

  setState(newHistory) {
    this.state = newHistory;
    this.addHistory();
  }

  addHistory() {
    const template = this.state
      .map((item, idx) => {
        return `<li data-idx=${idx}><span>${item}</span></li>`;
      })
      .join('');
    this.container.innerHTML = template;
  }

  histoyClickListener(e) {
    if (e.target.nodeName === 'SPAN') {
      this.searchData(e.target.innerText);
    }
  }
}
