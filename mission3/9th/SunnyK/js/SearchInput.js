import { checkNewKeyword } from './util/validation.js'
import { debounce } from './util/util.js'

export default function SearchInput({ $app, onSearch }) {
  checkNewKeyword(new.target)

  const $target = document.createElement('div')
  $target.className = 'SearchInput'
  this.$target = $target
  $app.appendChild($target)

  const $input = document.createElement('input')
  $input.setAttribute('type', 'text')
  $input.setAttribute('placeholder', '검색어를 입력하세요')
  this.$input = $input
  this.$target.appendChild(this.$input)

  this.inputText = ''
  this.onSearch = onSearch

  this.$input.addEventListener('keyup', (e) => {
    debounce({
      time: 300,
      callBackFunc: () => {
        const inputKeyword = e.target.value
        if (inputKeyword !== '') this.onSearch(inputKeyword)
      },
    })
  })

  this.$input.addEventListener('click', (e) => e.target.select())

  this.setState = (nextInputText) => {
    this.inputText = nextInputText
    this.render()
  }

  this.render = () => {
    $input.value = this.inputText
  }
}
