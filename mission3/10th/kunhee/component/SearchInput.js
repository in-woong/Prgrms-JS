import debounce from '../debounce.js'
let timer = null;
const debounce2 = (func, wait) => {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(func, wait)
}
export default function SearchInput({$sec01,initialState,onSearch}) {
    this.state = initialState;
    $sec01.innerHTML = `<input id="search-keyword" /><div id="search-result"></div>`
    this.timer = null;

    $sec01
    .querySelector('#search-keyword')
    .addEventListener('keyup',(e)=>{
      const keyword = e.target.value;
      debounce(()=>onSearch(keyword),300);
    })

    this.setState = function (nextState) {
      this.state = nextState
      this.render()
    }
    this.render = function () {
      document.querySelector('#search-result').innerHTML = this.state.result;
    }    
  }