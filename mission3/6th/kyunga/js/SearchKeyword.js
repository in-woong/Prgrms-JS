import debounce from './debounce.js'

export default function SearchKeyword(onKeyup, $target) {
    this.$target = document.querySelector($target)

    this.$target.addEventListener('keyup', (e) => {
        if (e.target.value) {
            debounce(() => onKeyup(e.target.value))
        }
    })
}
