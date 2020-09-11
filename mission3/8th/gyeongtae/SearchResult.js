export default function SearchResult(data, target) {
  this.data = data
  this.target = document.querySelector(target)
  this.render = () => {
    const htmlString = this.data
      .map(
        (element) => `
      <div class='serch-result'>
      <img src="${element.imageUrl}">
      <h3>${element.title}</h3>
      <h6>#${element.tags.join('#')}</h6>
      </div>
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
