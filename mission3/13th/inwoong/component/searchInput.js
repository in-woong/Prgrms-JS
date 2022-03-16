import debounce from '../util/debounce.js'

function SearchInput({ $target, onSubmit }) {
  this.onSubmit = onSubmit

  const $input = document.createElement('input')
  $target.appendChild($input)

  this.render = () => {}

  let timerId = null
  $input.addEventListener(
    'keyup',
    debounce(500, (e) => {
      this.onSubmit(e.target.value)
      e.target.value = ''
    })
  )
  this.render()
}

export default SearchInput
