import { getImageJson } from './api.js'
import SearchHistory from './SearchHistory.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import ErrorViewer from './ErrorViewer.js'
import { debounce } from './utils.js'

export default function App($historyTargetId, $inputTargetId, $resultTargetId) {
  this.searchResult = new SearchResult($resultTargetId)
  this.searchHistory = new SearchHistory($historyTargetId, async text => {
    try {
      const json = await getImageJson(text)
      this.searchResult.setState(json)
    } catch (err) {
      new ErrorViewer('errorView-container').render(err)
    }
  })
  this.searchInput = new SearchInput(
    $inputTargetId,
    debounce(async e => {
      try {
        const json = await getImageJson(e.target.value)
        this.searchHistory.setState(e.target.value)
        this.searchResult.setState(json)
      } catch (err) {
        const $errorTarget = document.querySelector('#errorView-container')
        new ErrorViewer($errorTarget).render(err)
      }
    }, 300)
  )
}
