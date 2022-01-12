export default function SearchHistory($target, history) {
  this.$target = $target
  this.history = history

  this.render()
}

SearchHistory.prototype.render = function() {
  this.$target.innerHTML = this.history.map(item => `<li>${item}</li>`).join('')
}
