function TodoCount($target, completedCount, totalCount) {
  this.$target = $target
  this.completedCount = completedCount
  this.totalCount = totalCount
  this.render = function() {
    this.$target.innerHTML = `
        <div>
            <span>${this.completedCount} / ${this.totalCount}</span>
        </div>
        `
  }
  this.render()
}
