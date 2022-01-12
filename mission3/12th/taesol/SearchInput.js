export default function SearchInput({ $target, onGetResult }) {
  this.$target = $target
  this.onGetResult = onGetResult
  let debounce

  $target.addEventListener('keyup', event => {
    if (debounce) {
      clearTimeout(debounce)
    }

    let evt = event
    debounce = setTimeout(async () => {
      const result = await fetch(
        `https://jjalbot.com/api/jjals?text=${evt.target.value}`
      )
      if (result.ok) {
        const parsedResult = await result.json()
        parsedResult.length > 0 &&
          this.onGetResult(parsedResult, evt.target.value)
      }
    }, 300)
  })

  window.addEventListener('click-history', async e => {
    const result = await fetch(`https://jjalbot.com/api/jjals?text=${e.detail}`)
    if (result.ok) {
      const parsedResult = await result.json()
      this.onGetResult(parsedResult, '')
    }
  })
}
