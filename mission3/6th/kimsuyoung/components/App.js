import searchKeyword from './searchKeyword.js'
import searchResult from './searchResult.js'
import { loadData } from '../api.js'

export default function App() {
  this.data = []

  this.onSearch = async (keyword) => {
    try {
      const result = await loadData(keyword)
      this.setState(result)
    } catch (e) {
      console.error(e)
    }
  }

  this.searchKeyword = new searchKeyword({
    $inputSelector: document.querySelector('#search-keyword'),
    onSearch: this.onSearch,
  })

  this.searchResult = new searchResult({
    data: this.data,
    $resultSelector: document.querySelector('#search-result'),
  })

  this.setState = (nextData) => {
    //console.log('App nextData', nextData)
    this.searchResult.setState(nextData)
  }
}
