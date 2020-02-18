function TodoCount(data) {
  if (!(this instanceof TodoCount)) {
    throw new Error('New 키워드 없이 실행했습니다')
  }

  this.data = data

  this.count = () => {
    this.total = this.data.length
    this.completed = this.data.filter(d => d.isCompleted).length
  }

  this.setState = newData => {
    this.data = newData
    this.count()
  }

  this.count()
}
