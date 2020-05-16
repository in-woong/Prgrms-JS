import SearchResult from './components/SearchResult.js'
import Searchkeyword from './components/Searchkeyword.js'
import SearchHistory from './components/SearchHistory.js'
import debounce from './utils/utils.js'

function App($target, getData, HISTORYLENGTH) {
  const keywordHandlers = {
    inputKeyup: (e) => {
      getData(e.target.value).then((datas) => {
        this.setState({ newData: datas })
        if (datas.length !== 0) {
          // input handler 디바운싱에 따른 result 출력 후 2차 디바운싱
          // 짤 이미지 출력 후 2초가 지난 data만 history에 추가.
          if (this.historyTimer) {
            clearTimeout(this.historyTimer)
          }
          this.historyTimer = setTimeout(
            this.setState.bind(this, { newQuery: e.target.value }),
            0
          )
        }
      })
    },
  }

  const historyHandlers = {
    liClick: (e) => {
      this.components.searchInput.$el.value = e.target.textContent
      this.components.searchInput.$el.focus()
      getData(e.target.textContent).then((datas) => {
        this.setState({ newData: datas })
      })
    },
  }

  this.init = () => {
    $target.innerHTML = `
          <div id="jjalbot-history"></div>
          <div id="jjalbot-keyword"></div>
          <div id="jjalbot-result"></div>
    `
    this.components = {
      searchHistory: new SearchHistory(
        $target.querySelector('#jjalbot-history'),
        'jjalbot-history-list',
        historyHandlers.liClick.bind(this),
        HISTORYLENGTH
      ),
      searchInput: new Searchkeyword(
        $target.querySelector('#jjalbot-keyword'),
        'jjalbot-keyword-input',
        debounce(keywordHandlers.inputKeyup.bind(this), 300)
      ),
      searchResult: new SearchResult(
        $target.querySelector('#jjalbot-result'),
        'jjalbot-result-imgs'
      ),
    }
  }

  this.render = () => {
    Object.values(this.components).forEach((c) => c.render())
  }

  this.bindEvent = () => {
    Object.values(this.components).forEach((c) => c.bindEvent && c.bindEvent())
  }

  this.setState = (states) => {
    const { newData, newQuery } = states
    newData && this.components.searchResult.setState(newData)
    newQuery && this.components.searchHistory.setState(newQuery)
  }
}

export default App
