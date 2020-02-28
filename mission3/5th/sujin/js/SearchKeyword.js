import debounce from "./debounce.js"

function SearchKeyword ($target, { onSearch, addHistory }) {
    const ENTER_KEY = 13

    $target.addEventListener('input', e => {
        debounce( () => {
            onSearch(e.target.value)
            addHistory(e.target.value)
            e.target.value=''
        }, 2000)
    })
}
export default SearchKeyword
