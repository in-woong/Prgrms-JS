import { debounce, getApiData } from './util.js';

function SearchInput({ $target, handleResultImageData, handleHistoryText }) {
  let timer;
  this.setState = function (keyword) {
    if (keyword) {
      getApiData(keyword, handleResultImageData);
      $target.value = keyword;
    } else {
      this.render();
    }
  };
  this.render = function () {
    $target.addEventListener('keyup', function (e) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        getApiData(e.target.value, handleResultImageData);
        handleHistoryText(e.target.value);
      }, 500);
    });
  };
  this.render();
}

export default SearchInput;
