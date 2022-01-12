import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import { getImages } from './utils.js'

export default function App($target) {
  this.$target = $target
  
  this.$searchInputContainer
  this.searchInput

  this.$searchResultContainer
  this.searchResult

  this.$searchHistoryContainer
  this.searchHistory

  this.images = []
  this.searchHistoryList = []

  this.init()
  this.initEvent()
}

App.prototype.init = function() {
  this.$searchHistoryContainer = document.createElement('ul')
  this.$target.appendChild(this.$searchHistoryContainer)

  this.$searchInputContainer =  document.createElement('div')
  this.$target.appendChild(this.$searchInputContainer)

  this.$searchResultContainer = document.createElement('div')
  this.$target.appendChild(this.$searchResultContainer)

  this.searchInput = new SearchInput(
    this.$searchInputContainer, 
    this.setImages.bind(this), 
    this.setSearchHistory.bind(this)
  )
  this.searchResult = new SearchResult(this.$searchResultContainer, this.images)
  this.searchHistory = new SearchHistory(this.$searchHistoryContainer, this.searchHistoryList, this.setImages)
}

App.prototype.setImages = function(newImages) {
  this.images = newImages
  this.searchResult = new SearchResult(this.$searchResultContainer, this.images)
}

App.prototype.setSearchHistory = function(searchHistory) {
  this.searchHistoryList = [...this.searchHistoryList, searchHistory]
  this.searchHistory = new SearchHistory(this.$searchHistoryContainer, this.searchHistoryList, this.setImages)
}

App.prototype.initEvent = function() {
  this.$searchHistoryContainer.addEventListener('click', async (e) => {
    if (e.target.tagName !== 'LI') {
      return
    }
  
    e.stopPropagation()
    const historyItem = e.target.innerText
    if (!historyItem) {
      return
    }

    setInputValue(historyItem)

    const images = await getImages(historyItem)
    this.setImages(images)
  })
}

function setInputValue(value) {
  const $input = document.querySelector('input')
  $input.value = value
}
