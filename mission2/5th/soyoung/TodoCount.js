function TodoCount($target, data) {
  this.$target = $target
  this.data = data
  this.render = function() {
    this.$target.innerHTML = `
        <div>
            <span>${this.data.filter(item => item.isCompleted).length} / ${
      this.data.length
    }</span>
        </div>
        `
  }
  this.render()
}
