import SearchInput from './SearchInput.js';
import dummyData from './DummyData.js';
import SearchResult from './SearchResult.js';

function App() {
  this.render = () => {
    this.searchResult = new SearchResult(dummyData, document.querySelector('#search-result'));
    this.searchInput = new SearchInput(document.querySelector('#search-keyword'), {
      fetchData: this.fetchData,
    });
  };

  this.fetchData = (inputData) => {
    fetch(`https://jjalbot.com/api/jjals?text=${inputData}`)
      .then((x) => x.json())
      .then((data) => {
        this.setState(data);
      });
  };

  this.setState = (nextData) => {
    this.searchResult.setState(nextData);
  };

  this.render();
}

export default App;
