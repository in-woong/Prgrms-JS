export default function SearchHistory({ $target, histories, onHistory }) {
  this.state = histories
  const $history = document.createElement('div')
  $target.appendChild($history)

  this.render = () => {
    $history.innerHTML = this.state
      .map((history) => `<button>${history}</button>`)
      .join(' ')
  }

  $history.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const text = e.target.innerText
      onHistory(text)
    }
  })

  this.setState = (newData) => {
    this.state = newData
    this.render()
  }
  this.render()
}
