export default function SearchHistory({ $app, initialData, onClick }) {
  const $target = document.createElement('ul')
  $target.className = 'search-history'
  $app.appendChild($target)

  this.$target = $target
  this.data = initialData

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.initializeEvents = () => {
    this.$target.addEventListener('click', (e) => {
      if (e.target.className === 'search-history-keyword') {
        const { index } = e.target.dataset

        onClick(this.data[parseInt(index, 10)])
      }
    })
  }

  this.render = () => {
    if (this.data) {
      this.$target.innerHTML = this.data.map(
        (keyword, index) =>
          `
        <li class="search-history-keyword" data-index="${index}">
          ${keyword}
        </li>
        `
      )
    } else {
      this.$target.innerHTML = ''
    }
  }

  this.initializeEvents()
  this.render()
}
