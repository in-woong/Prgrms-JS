function TodoCount($target, initialCount) {
  this.count = initialCount
  this.$target = $target
  this.$counter = document.createElement('span')
  this.$target.appendChild(this.$counter)

  this.setState = function (nextData) {
    const count = nextData.length
    this.count = count
    this.render()
  }

  this.render = function () {
    this.$counter.innerHTML = this.count
  }

  this.render()
}
