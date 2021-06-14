class SearchInput {
  constructor({ $app, onGetData }) {
    this.onGetData = onGetData
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

  onKeyUpInput = ({ target }) => {
    console.log('onKeyUpInput', target, this.onGetData)
  }
}

export default SearchInput
