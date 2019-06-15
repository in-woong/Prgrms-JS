import evnetHelper from '../utils/eventHelper.js';

const SearchInput  = class {
  constructor(search){
    this.$searchEl = document.querySelector(search);
    this.searchedKeyword = "";
  }
  // handleJJalResult(data){
  //   this.setState(data);
  // }
  bind(event, handler){
    switch (event) {
      case 'FETCH_RESULT':
        this.$searchEl.addEventListener('keyup', (()=>evnetHelper.debounce(
          ()=>handler(this.$searchEl.value)
        )));
    }
  }
  renderErrorMessage(error){
    console.log(error.message);
  }
};

export default SearchInput;
