import { checkUseNewKeyword } from './validationUtil.js';
import { DEBOUNCE_DELAY_TIME } from './constants.js';

function SearchInput(targetElement, getJjalsList) {
  if (checkUseNewKeyword(new.target)) {
    this.target = targetElement;
    this.timer = null;
  }

  this.target.addEventListener('keyup', function(e) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(function() {
      getJjalsList(e.target.value);
    }, DEBOUNCE_DELAY_TIME);
  });

  this.changeSearchInput = (text = '') => {
    this.target.value = text;
  };
};

export default SearchInput;