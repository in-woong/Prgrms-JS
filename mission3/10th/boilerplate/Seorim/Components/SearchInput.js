import debounce from '../util/debounce.js'
import { $ } from '../util/index.js'

function SearchInput({ target, onChange }) {
    this.init = () => {
        this.$element = $(target)
        this.inputValue = null
        this.bindEvents()
    }

    this.bindEvents = () => {
        this.$element.addEventListener('keyup', (e) => {
            debounce(() => {
                this.setState(e.target.value)
                onChange(this.inputValue)
            },1000)
        })
    }

    this.setState = value => {
        this.inputValue = value
        this.$element.value = value
    }

    this.init()
}

export default SearchInput
