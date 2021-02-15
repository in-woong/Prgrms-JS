import { isNew } from '../common/validateData.js'

function SearchResult({ targetDOM, initData }) {
  if (isNew(new.target)) {
    this.$targetDOM = targetDOM
    this.searchResultData = initData

    this.$serchResultDOM = document.createElement('div')
    this.$serchResultDOM.id = 'search-result'

    this.$targetDOM.appendChild(this.$serchResultDOM)
  }

  this.setState = (newState) => {
    this.searchResultData = newState
    this.render()
  }

  // 검색 데이터가 없는 경우, 있는 경우
  this.render = () => {
    if (this.searchResultData.length === 0) {
      this.$serchResultDOM.innerHTML = `<p>해당하는 검색결과가 없습니다.</p>`
    } else {
      const htmlString = `${this.searchResultData.map((d) => (d.imageUrl ? `<img src="${d.imageUrl}">` : ``)).join('')}`
      this.$serchResultDOM.innerHTML = htmlString
    }
  }

  this.render()
}

export default SearchResult
