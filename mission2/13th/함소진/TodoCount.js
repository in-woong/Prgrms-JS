function TodoCount($target, data) {
  this.$target = $target
  this.data = data
  this.$count = document.createElement('p')

  this.$target.append(this.$count)

  this.render = (data = this.data) => {
    const { total, complete } = calculation(data)
    this.$count.innerText = `total : ${total} / Complete : ${complete}`
  }

  const calculation = (data) => {
    return {
      total: data.length,
      complete: data.reduce(
        (acc, todo) => (todo['isCompleted'] === true ? acc + 1 : acc),
        0
      ),
    }
  }

  this.render()
}
