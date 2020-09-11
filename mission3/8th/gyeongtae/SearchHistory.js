export default function SearchHistory(data, target) {
  this.data = data
  this.target = document.querySelector(target)

  this.render = () => {
    const htmlString = this.data
      .map(
        (element) => `
        <span class="search-history">${element}</span>
      `
      )
      .join('')
    this.target.innerHTML = htmlString
  }
  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }
  this.render()
}
