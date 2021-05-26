import { checkUseNewKeyword, checkDataValidation } from './validationUtil.js';

function SearchResult(targetElement, initialData) {
  if (checkUseNewKeyword(new.target)) {
    this.target = targetElement;
    this.data = initialData;
  }

  this.render = function() {
    const htmlString = `${this.data
      .map(d => `<img src="${d.imageUrl}">`)
      .join('')}`;
    this.target.innerHTML = htmlString;
  }

  this.setState = function(nextData) {
    checkDataValidation(nextData);
    this.data = nextData;
    this.render();
  }

  checkDataValidation(this.data);
  this.render();
};

export default SearchResult;
