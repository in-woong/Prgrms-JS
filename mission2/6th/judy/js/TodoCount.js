function TodoCount($target, count) {
  this.count = count
  this.render = () => {
    $target.innerHTML = this.count
    
  }
  this.setState = (nextData) => {
    this.count = nextData.length
    this.render()
  }
  this.render();
}

