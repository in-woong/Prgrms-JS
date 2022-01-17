export default function SearchHistory({ $target, initialState }) {
  this.state = initialState

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $target.innerHTML = `
        <p>검색 기록: ${this.state
          .map(history => `<span>${history}</span>&nbsp;&nbsp;`)
          .join('')}</p>
    `
  }

  this.render()

  $target.addEventListener('click', e => {
    if (e.target.nodeName === 'SPAN') {
      window.dispatchEvent(
        new CustomEvent('click-history', { detail: e.target.innerText })
      )
    }
  })
}
