class SearchHistroy {
  constructor(data, $target) {
    this.data = data
    this.$target = $target
    this.render()
  }

  render = () => {
    const htmlString = this.data
      .map((history, idx) => `<div data-index=${idx}>${history}</div>`)
      .join(' ')
    this.$target.innerHTML = htmlString
  }
}

export default SearchHistroy
