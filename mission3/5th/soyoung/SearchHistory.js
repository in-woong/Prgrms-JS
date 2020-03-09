function SearchHistory($target, data, { onClick }) {
  this.$target = $target
  this.data = data
  this.onClick = onClick
  this.render = () => {
    this.$target.innerHTML = `
      <ul>
        ${this.data.list
          .map(
            (item, index) =>
              `<li style="cursor:pointer; color:${
                item === data.currentItem ? 'blue' : 'black'
              }">${item}</li>`
          )
          .join('')}
      </ul>`
    this.$ul = this.$target.querySelector('ul')
    this.$ul.addEventListener('click', e => {
      if (e.target.nodeName === 'LI') {
        this.onClick(e.target.innerText)
      }
    })
  }
  this.addItem = item => {
    const nextData = [...this.data.list, item]
    this.data.list = nextData
    this.render()
  }
  this.setCurrentItem = item => {
    this.data.currentItem = item
    this.render()
  }
  this.render()
}
