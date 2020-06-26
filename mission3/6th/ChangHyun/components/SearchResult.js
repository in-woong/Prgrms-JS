export default function SearchResult($target, className, datas = []) {
  this.$target = $target

  this.$el = document.createElement('div')
  this.$el.className = className
  this.datas = datas

  this.render = () => {
    this.$el.innerHTML = `${this.datas
      .map((data) => `<img src=${data.imageUrl}>`)
      .join('')}`
    this.$target.appendChild(this.$el)
  }

  this.setState = (newDatas) => {
    this.datas = newDatas
    this.render()
  }
}
