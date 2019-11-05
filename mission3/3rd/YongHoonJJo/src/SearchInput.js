import { validateConstructor, setAttr } from './utils.js'

function SearchInput({onDebounce}) {
  validateConstructor.call(this)

  this.$inputComponent = document.createElement('div')

  this.$inputElem = document.createElement('input')
  setAttr(this.$inputElem, 'type', 'text')
	  
  this.$inputComponent.appendChild(this.$inputElem)

  const url = 'https://jjalbot.com/api/jjals'
  onDebounce(this.$inputElem, url, 'text')
}

export default SearchInput