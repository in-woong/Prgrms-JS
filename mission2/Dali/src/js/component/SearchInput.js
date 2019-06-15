import evnetHelper from '../utils/eventHelper.js';

const SearchInput  = class {
  constructor(search){
    this.$searchEl = document.querySelector(search);
    this.searchedKeyword = "";
    this.init();
  }
  init(){
    this.$searchEl.addEventListener('keyup', (e)=>{
      switch(e.key){
        case "ESC":
        case "Escape":
          return this.clear();
      }
    });
  }
  clear(){
    this.$searchEl.value = '';
  }
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
