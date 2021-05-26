import debouce from '../debouce.js'

const INPUT_DEBOUNCE_DELAY = 400;

export default function KeywordInput($keywordInput, searchKeyword) {
  this.$keywordInput = $keywordInput;

  this.searchKeyword = () => {
    const { value } = this.$keywordInput;
    if (value.length > 0) {
      searchKeyword(value);
    }
  };

  this.$keywordInput.addEventListener('keyup', debouce(this.searchKeyword, INPUT_DEBOUNCE_DELAY));
}
