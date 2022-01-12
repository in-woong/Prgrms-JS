import { getImages } from './utils.js'

export default function SearchInput($target, setImages, setSearchHistory) {
  this.$target = $target
  this.setImages = setImages
  this.setSearchHistory = setSearchHistory

  this.fetchTimerId

  this.render()
  this.eventInit()
}

SearchInput.prototype.render = function() {
  this.$target.innerHTML = "<input id='hello' type='text' />"
}

SearchInput.prototype.eventInit = function() {
  const $input = document.querySelector('input')
  if (!$input) {
    return
  }

  $input.addEventListener('keyup', keyupHandler.bind(this))
}

function keyupHandler(e) {
  if (this.fetchTimerId) {
    clearTimeout(this.fetchTimerId)
  }

  this.fetchTimerId = setTimeout(async () => {
    const searchKeyword = e.target.value

    if (!searchKeyword.trim()) {
      return
    }

    const images = await getImages(searchKeyword)
    this.setImages(images)
    this.setSearchHistory(searchKeyword)
  }, 300)
}

SearchInput.prototype.clear = function(value) {
  const $input = document.querySelector('input')
  $input.value = value
}
