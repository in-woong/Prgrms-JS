//SearchKeyword.js

function SearchKeyword({ $selector, onKeyUp }) {
  this.init = () => {
    validateSelector($selector)

    this.$target = document.querySelector($selector)

    this.keyUp = onKeyUp

    this.$target.addEventListener('keyup', this.keyUp)
  }

  this.init()
}
