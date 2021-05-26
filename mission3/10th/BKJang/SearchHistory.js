import { checkUseNewKeyword } from './validationUtil.js';

function SearchHistory(targetElement, initialData, getJjalsListWithHistory) {
  if (checkUseNewKeyword(new.target)) {
    this.target = targetElement;
    this.data = initialData;
  }

  this.render = function () {
    const searchHistoryHTML = this.data.map(searchText => {
      return `<li data-item-text=${searchText} class="search-item">
      ${searchText}
      </li>`
    }).join('');

    this.target.innerHTML =
      `<ul>
        ${searchHistoryHTML}
      </ul>`;
  }

  this.addSearchHistory = function(searchText) {
    if (!searchText) return;
    this.data = [...this.data, searchText];
    this.render();
  }

  this.target.addEventListener('click', function (e) {
    const itemText = e.target.getAttribute('data-item-text');
    const nodeName = e.target.nodeName;

    if (nodeName === 'LI') {
      getJjalsListWithHistory(itemText);
    }
  });

  this.render();
};

export default SearchHistory;
