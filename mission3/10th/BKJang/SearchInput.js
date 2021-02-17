import { checkUseNewKeyword } from './validationUtil.js';
import { DEBOUNCE_DELAY_TIME } from './constants.js';

function SearchInput(targetElement, getJjalsList) {
  if (checkUseNewKeyword(new.target)) {
    this.target = targetElement;
    this.timer = null;
  }

  this.target.addEventListener('input', function(e) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(function() {
      getJjalsList(e.target.value);
    }, DEBOUNCE_DELAY_TIME);
  });
};

export default SearchInput;
