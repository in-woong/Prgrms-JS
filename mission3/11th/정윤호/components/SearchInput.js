class SearchInput {
  constructor({ $app, getData }) {
    this.getData = getData
    this.$target = document.createElement('div')
    this.$target.className = 'search-input'
    this.$target.addEventListener('keyup', this.onKeyUpInput)
    $app.append(this.$target)
  }

  render = () => {
    this.$target.innerHTML = `
      <input type="text">
    `
  }

  onKeyUpInput = ({ target, key }) => {
    if (key !== 'Enter' || target.value.trim() === '') return
    this.getData(target.value.trim())
  }
}

export default SearchInput
