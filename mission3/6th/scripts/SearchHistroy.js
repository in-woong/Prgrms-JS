class SearchHistroy {
  constructor(data, $target) {
    this.history = data
    this.$target = $target
    this.render()
  }

  render = () => {
    const htmlString = this.history
      .map((history, idx) => `<div data-index=${idx}>${history}</div>`)
      .join(' ')
    this.$target.innerHTML = htmlString
  }

  setState = (histroy) => {
    this.history = histroy
    this.render()
  }
}

export default SearchHistroy
