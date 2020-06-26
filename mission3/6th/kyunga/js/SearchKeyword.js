import { DEBOUNCE_TIME } from './contstant.js'
import { debounce } from './debounce.js'

export default function SearchKeyword({ onKeyup, $target }) {
    this.$target = $target

    this.$target.addEventListener('keyup', debounce((e) => {
        onKeyup(e.target.value)
    }, DEBOUNCE_TIME))
}
