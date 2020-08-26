import SearchHistory from './SearchHistory.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import { debounce } from './utils.js'

const JALLBOT_URL = 'https://jjalbot.com/api/jjals?text='

function App(inputId, resultId, historyId) {
  this.inputId = inputId
  this.resultId = resultId
  this.historyId = historyId

  this.getImages = async (keyword) => {
    try {
      if (!keyword.trim()) throw new Error('Keyword is empty')
      const response = await fetch(`${JALLBOT_URL}${keyword}`)
      const images = await response.json()
      if (images.length === 0) throw new Error('Result not found')
      this.setState(images, keyword)
    } catch (e) {
      console.error(e)
      this.setState([], null)
    }
  }

  this.handleChangeInput = async (event) => {
    const keyword = event.target.value
    await this.getImages(keyword)
  }

  this.handleClickHistory = async (keyword) => {
    await this.getImages(keyword)
  }

  this.init = () => {
    this.searchInput = new SearchInput(
      this.inputId,
      debounce(this.handleChangeInput, 300)
    )
    this.searchResult = new SearchResult(this.resultId)
    this.searchHistory = new SearchHistory(
      this.historyId,
      this.handleClickHistory
    )
  }

  this.setState = (images, keyword) => {
    this.searchResult.setState(images)
    this.searchHistory.setState(keyword)
  }

  this.init()
}

export default App
