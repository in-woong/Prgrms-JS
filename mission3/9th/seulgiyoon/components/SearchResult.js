export default class SearchResult {
  constructor({ target, data }) {
    this.target = document.querySelector(target)
    this.data = data
    this.render()
  }

  render = () => {
    const htmlString = `${this.data
      .map((data) => `<img src="${data.imageUrl}">`)
      .join('')}`
    this.target.innerHTML = htmlString
  }

  setState = (newData) => {
    this.data = newData
    this.render(this.data)
  }
}
