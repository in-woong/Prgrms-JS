function TodoCount({ target, totalCount, completeCount }) {
  this.$target = target
  this.totalCount = totalCount
  this.completeCount = completeCount
  this.$paragraph = document.createElement('p')
  this.render = function () {
    this.$paragraph.innerHTML = `${this.completeCount} / ${this.totalCount}`
    this.$target.appendChild(this.$paragraph)
  }
  this.setState = function ({ totalCount, completeCount }) {
    this.totalCount = totalCount
    this.completeCount = completeCount
    this.render()
  }
  this.render()
}
