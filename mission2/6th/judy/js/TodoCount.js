function TodoCount($target, count) {
  this.count = count
  this.render = () => {
    $target.innerHTML = this.count
  }
  this.setState = (nextData) => {
    this.count = nextData
    this.render()
  }
  this.render();
}

