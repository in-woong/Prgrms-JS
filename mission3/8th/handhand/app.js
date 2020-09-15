import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js';


function App() {
  this.datas = [];
  this.$searchResult = document.querySelector('#search-result');

  this.init = () => {
    this.searchInput = new SearchInput({ onChangeData: this.setState });
    this.searchResult = new SearchResult({
      data: this.datas,
      $target: this.$searchResult
    });
  }

  this.setState = (newDatas) => {
    this.datas = newDatas;
    this.searchResult.setState(this.datas);
  }

  this.init();
};


export default App;
