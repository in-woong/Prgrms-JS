export default function SearchInput({$sec01,initialState,onKeyup}) {
    this.state = initialState;
    $sec01.innerHTML = `<input id="search-keyword" /><div id="search-result"></div>`
    this.timer = null;

    $sec01
    .querySelector('#search-keyword')
    .addEventListener('keyup',(e)=>{
      onKeyup(e);
    })

    this.setState = function (nextState) {
      this.state = nextState
      this.render()
    }
    this.render = function () {
      document.querySelector('#search-result').innerHTML = this.state.result;
    }
  }