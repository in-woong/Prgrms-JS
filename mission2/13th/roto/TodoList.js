export default function TodoList({ $target, initialData }) {
  this.$target = $target
  this.state = initialData
  this.$list = document.createElement('ul')
  this.$list.addEventListener('click', (e) => {
    console.log(e.target.dataset.index)
  })
  $target.appendChild(this.$list)

  this.render = () => {
    this.$list.innerHTML = this.state
      .map((item, index) => {
        return item.isCompleted
          ? `<li data-index=${index}><s>${item.text}</s></li>`
          : `<li data-index=${index}>${item.text}</li>`
      })
      .join('')
  }
  this.setState = (newData) => {
    console.log(newData)
    this.state = [...newData, ...this.state]
    this.render()
  }
  this.render()
}
