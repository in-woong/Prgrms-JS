//import {dummyData} from './dummyData.js';
import SearchInput from './SeachInput.js';
import SearchResult from './SearchResult.js';

function App($app, data) {
  this.data = data || { searchResult: []};

  this.searchInput = new SearchInput({ 
    $app,
    onSearch: async (keyword) => {
      const searchFetch = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`);
      const searchResult = await searchFetch.json();
      this.setState({
        searchResult,
      })
    }
  })
  
  this.searchResult = new SearchResult({
    $app,
    initialState : null
  });
  
  this.setState = (nextState) => {
    this.data = nextState;
    this.searchResult.setState(this.data.searchResult)
  }
}

export default App;