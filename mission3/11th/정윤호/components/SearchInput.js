class SearchInput {
  constructor({ $app }) {
    this.$target = document.createElement('div')
    this.$target.className = 'search-input'
    this.$target.addEventListener('keyup', this.onKeyUpInput)

    $app.appendChild(this.$target)
  }

  render = () => {
    this.$target.innerHTML = `
      <input type="text">
    `
  }

  onKeyUpInput = ({ target }) => {
    console.log('onKeyUpInput', target)
  }
}

export default SearchInput
