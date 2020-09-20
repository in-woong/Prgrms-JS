export default class Loader {
  constructor({ $target }) {
    this.$target = $target

    this.$wrapper = document.createElement('div')
    this.$wrapper.className = 'Loader'

    this.$loader = document.createElement('div')
    this.$loader.className = 'Loader-inner'

    this.$wrapper.appendChild(this.$loader)
    this.$target.appendChild(this.$wrapper)
  }

  show() {
    this.$wrapper.style.display = 'flex'
  }

  hide() {
    this.$wrapper.style.display = 'none'
  }
}
