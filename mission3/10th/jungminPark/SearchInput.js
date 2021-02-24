export default function SearchInput({ $app, onSearch }) {
    const $target = document.createElement('input')
    $target.className = 'SearchInput'
    $app.appendChild($target)

    this.$target = $target
    this.onSearch = onSearch

    $target.addEventListener('keyup', function(e) {
        const keyword = e.target.value
        onSearch(keyword)
    })
} 