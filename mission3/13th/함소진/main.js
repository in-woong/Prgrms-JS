import SearchHistory from './searchHistory.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'

const searchData = []
const historyData = []
const getSearchData = async (keyword, fromHistory) => {
  try {
    if (keyword.length < 1) {
      searchResult.setState([])
      return
    }
    const response = await fetch(
      `https://jjalbot.com/api/jjals?text=${keyword}`
    )
    const data = await response.json()
    searchResult.setState(data)
    !fromHistory && searchHistory.addHistory(keyword)
    if (!response.ok) {
      throw new error('API 요청에 실패하였습니다.')
    }
  } catch (error) {
    console.log(error)
  }
}

const searchInput = new SearchInput('#search-keyword', getSearchData)
const searchResult = new SearchResult('#search-result', searchData)
const searchHistory = new SearchHistory(
  '#search-history',
  historyData,
  getSearchData
)
