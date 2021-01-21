import KeywordInput from './components/KeywordInput.js'
import SearchResult from './components/SearchResult.js'
import SearchHistory from './components/SearchHistory.js'

export default function App($app) {
  this.$app = $app

  this.searchKeyword = async (keyword) => {
    try {
      const response = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
      const data = await response.json()
      this.setState(keyword, data)
    } catch (error) {
      console.log(error)
    }
  }

  this.setState = (keyword, newData) => {
    this.searchResult.setState(newData)
    this.searchHistory.setState(keyword)
  }

  this.init = () => {
    this.$searchHistory = document.createElement('ul');
    this.$searchHistory.className = 'search-history';

    this.$searchInput = document.createElement('input');
    this.$searchInput.className = 'search-keyword';

    this.$searchResult = document.createElement('div');
    this.$searchResult.className = 'search-result';

    this.$app.appendChild(this.$searchInput);
    this.$app.appendChild(this.$searchHistory);
    this.$app.appendChild(this.$searchResult);

    this.searchInput = new KeywordInput(this.$searchInput, this.searchKeyword)
    this.searchResult = new SearchResult(this.$searchResult)
    this.searchHistory = new SearchHistory(this.$searchHistory, this.$searchInput, this.searchKeyword)
  }

  this.init()
}
