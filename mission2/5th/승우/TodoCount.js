function TodoCount(selector, data) {
  if (!(this instanceof TodoCount)) {
    throw new Error('New 키워드 없이 실행했습니다')
  }

  checkSelector(selector)
  checkData(data)

  this.$target = document.querySelector(selector)
  this.data = data

  this.render = () => {
    this.total = this.data.length
    this.completed = this.data.filter(d => d.isCompleted).length
    this.$target.innerHTML = `<div>Total : ${this.total}</div><div>Finished : ${this.completed}</div>`
  }

  this.setState = newData => {
    this.data = newData
    this.render()
  }

  this.render()
}
