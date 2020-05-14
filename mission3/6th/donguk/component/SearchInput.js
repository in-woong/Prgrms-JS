import Component from './Component.js'
import { checkSelector } from '../utils/validation.js'
import debounce from '../utils/debounce.js'

export default class SearchInput extends Component {
  constructor(props) {
    super()
    const { selector, onSearch, that } = props
    checkSelector(selector)
    this.$target = document.querySelector(selector)
    this.onSearch = onSearch.bind(that)
    this.render()
    this.bindEvent()
  }

  render() {
    this.$input = document.createElement('input')
    this.$input.setAttribute('type', 'text')
    this.$input.setAttribute('placeholder', '키워드를 입력해주세요 :)')
    this.$target.appendChild(this.$input)
  }

  bindEvent() {
    this.$input.addEventListener('keyup', (e) => {
      const { value } = e.target
      if (value) {
        debounce(this.onSearch, value, 100)
      }
    })
  }
}
