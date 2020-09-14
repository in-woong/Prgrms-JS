export default function SearchHistory(data, renderEle, clickSearchHistory) {
  this.data = data
  this.renderEle = document.createElement('ul')
  this.renderEle.id = 'search-historys'
  renderEle.append(this.renderEle)
  this.clickSearchHistory = clickSearchHistory

  this.render = () => {
    const htmlString = this.data
      .map(
        (element) => `
        <li>${element}</li>
      `
      )
      .join('')
    this.renderEle.innerHTML = htmlString
  }
  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }
  this.addSearchHistoryData = (searchHistoryData) => {
    // 배열에 추가할 키워드 데이터가 존재한다면  그 데이터를 제거하고
    // 다시 배열 맨 앞 부분에 추가한뒤 배열 데이터 searchHistory 컴포넌트에 setState
    const existSearchHistoryIndex = this.data.findIndex(
      (searchHistory) => searchHistory === searchHistoryData
    )
    if (existSearchHistoryIndex > -1) {
      this.data.splice(existSearchHistoryIndex, 1)
    }
    this.data.unshift(searchHistoryData)

    this.setState(this.data)
  }
  this.render()
  this.renderEle.addEventListener('click', this.clickSearchHistory)
}
