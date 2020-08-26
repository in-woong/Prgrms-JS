export default class SearchHistroy {
  constructor(target) {
    this.data = new Set()
    this.target = document.querySelector(target)
  }
  render(app) {
    this.ul = this.target.appendChild(document.createElement('ul'))
    this.ul.addEventListener('click', (e) => {
      app.getJjalData(e.target.textContent)
    })
  }
  addHistroyData(keyword) {
    this.data.add(keyword)
    const li = this.ul.appendChild(document.createElement('li'))
    li.innerHTML = keyword
  }
}
