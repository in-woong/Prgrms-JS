export default function SearchHistory($target, onHistoryClick) {
  this.$target = $target
  this.history = new Set()

  this.$target.addEventListener('click', e => {
    onHistoryClick(e.target.textContent)
  })

  this.setState = searchWord => {
    this.history.add(searchWord)
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = `<ul>${[...this.history]
      .map(element => `<li>${element}</li>`)
      .join('')}</ul>`
  }
}
