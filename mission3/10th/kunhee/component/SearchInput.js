export default function SearchInput({$app,onKeyup}) {
    this.state = {};
    $app.innerHTML = `<input id="search-keyword" /><div id="search-result"></div>`
    this.timer = null;
    $app
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