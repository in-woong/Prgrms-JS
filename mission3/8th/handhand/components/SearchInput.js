import { fetchImageData } from '../api/index.js';


function SearchInput({ onChangeData }) {
  this.keyword = '';

  this.init = () => {
    const $keywordInput = document.querySelector('#search-keyword');
    $keywordInput.addEventListener('keyup', this.onKeyupInput);
  };

  this.getState = () => this.keyword;

  this.setState = (newValue) => {
    this.keyword = newValue;
  };

  this.onKeyupInput = async (event) => {
    const keyword = event.target.value;
    this.setState(keyword);
    const datas = await fetchImageData(keyword);
    onChangeData(datas);
  }

  this.init();
};


export default SearchInput;
