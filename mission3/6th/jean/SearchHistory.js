export default function SearchHistory ({$target, data, onClick}) {
  this.data = data

  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }

  this.render = () => {
    if (this.data) {
      const htmlString = this.data.map(keyword =>
        `<li data-keyword="${keyword}">${keyword}</li>`
      ).join('')

      $target.innerHTML = `<ul>${htmlString}</ul>`
    }
  }

  $target.addEventListener("click", (e) => {
    const keyword = e.target.dataset.keyword

    if (keyword) {
      onClick(keyword)
    }

  })

  this.render()
}
