export default function SearchResult(data, target) {
  if (!Array.isArray(data)) {
    throw new Error('올바른 데이터 형식이 아닙니다.')
  }

  this.data = data
  this.$searchResult = document.querySelector(target)

  this.render = () => {
    this.$searchResult.innerHTML = this.data
      .map(item => `<img src=${item.imageUrl} alt=${item.title}>`)
      .join('')
  }

  this.setState = newData => {
    this.data = newData
    this.render()
  }

  this.render()
}
