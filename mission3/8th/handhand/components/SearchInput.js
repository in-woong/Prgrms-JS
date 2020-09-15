import { fetchImageData } from '../api/index.js';
import { debounce } from '../utils/index.js';


function SearchInput({ onChangeData }) {
  this.keyword = '';

  this.init = () => {
    const $keywordInput = document.querySelector('#search-keyword');
    $keywordInput.addEventListener('keyup', debounce(this.onKeyupInput, 200))
  };

  this.getState = () => this.keyword;

  this.setState = (newValue) => {
    this.keyword = newValue;
  };

  this.onKeyupInput = async (event) => {
    const keyword = event.target.value;
    if (!keyword) return;

    this.setState(keyword);
    const datas = await fetchImageData(keyword);
    onChangeData(datas);
  }

  this.init();
};


export default SearchInput;
