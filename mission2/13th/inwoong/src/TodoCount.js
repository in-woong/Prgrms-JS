export default function TodoCount(data, $target) {
  this.data = data
  this.$target = $target
  const h2 = document.querySelector(`#${$target}`)
  const div = document.createElement('div')
  h2.appendChild(div)

  this.render = () => {
    this.count = 0
    this.data &&
      this.data.forEach((item) => {
        if (!item.isCompleted) {
          this.count += 1
        }
      })
    div.innerHTML = `<span>Todo : ${this.count}</span>`
  }

  this.setState = (newData) => {
    this.data = newData
    this.render()
  }
  this.render()
}
