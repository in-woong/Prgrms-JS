import SearchResult from './SearchResult.js'
import Api from './api/api.js'
import { debounce } from './utils/util.js'
import ErrorViewer from './utils/ErrorViewer.js'

export default function SearchInput({ setHistoryState }) {
  const $searchInput = document.querySelector('#search-keyword')
  const $searchResult = document.querySelector('#search-result')

  this.keyup = debounce((e) => this.search(e), 2000)

  this.search = async (e) => {
    if (!e) return

    const keyword = e.target.value

    if (keyword.length < 1) return

    const data = await this.fetchData(keyword)
    const searchResult = new SearchResult(data, $searchResult)

    searchResult.render()
    setHistoryState({ keyword })
  }

  this.fetchData = async (value) => {
    try {
      return await Api.findItems(value)
    } catch (err) {
      const errorViewer = new ErrorViewer(err)
      errorViewer.render()
      return []
    }
  }

  this.initEventListener = () => {
    $searchInput.addEventListener('keyup', this.keyup)
  }
}
