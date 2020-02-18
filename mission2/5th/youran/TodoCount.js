function TodoCount(todoCountNumbers, selector) {
  this.$todoCount = document.querySelector(selector)
  this.todoCountNumbers = todoCountNumbers

  this.render = () => {
    this.$todoCount.innerHTML = `
      완료: ${this.todoCountNumbers.completed}/${this.todoCountNumbers.total}
    `
  }

  this.setState = nextData => {
    this.todoCountNumbers = nextData
    this.render()
  }

  this.render()
}
