import { debounce } from './utils.js';

function SearchInput(target, onSearchKeyword) {
  if (!(this instanceof SearchInput)) {
    throw new Error('error: SearchInput must be called with new!');
  }
  this.targetContainer = target;

  const onResetInput = () => {
    this.targetContainer.value = '';
    this.targetContainer.blur();
    this.targetContainer.focus();
  };

  this.targetContainer.addEventListener(
    'input',
    debounce((e) => {
      this.keyword = e.target.value;
      if (this.keyword) {
        onSearchKeyword(this.keyword);
        onResetInput();
      }
    })
  );
}

export default SearchInput;
