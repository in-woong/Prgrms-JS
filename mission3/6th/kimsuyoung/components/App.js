import searchKeyword from './searchKeyword.js'
import searchResult from './searchResult.js'

//const $app = document.querySelector('#app')
const API_URL = 'https://jjalbot.com/api/jjals?text='

export default function App() {
  this.data = []

  this.searchKeyword = new searchKeyword({
    $inputSelector: document.querySelector('#search-keyword'),
    onSearch: (keyword) => {
      this.searchUrl = `${API_URL}${keyword}`
      fetch(this.searchUrl)
        .then((value) => value.json())
        .then((data) => {
          this.setState(data)
        })
    },
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
