import { checkUseNewKeyword } from './validationUtil.js';

function SearchInput(targetElement, onKeyPressInput) {
  if (checkUseNewKeyword(new.target)) {
    this.target = targetElement;
  }

  this.target.addEventListener('keyup', onKeyPressInput);
};

export default SearchInput;
