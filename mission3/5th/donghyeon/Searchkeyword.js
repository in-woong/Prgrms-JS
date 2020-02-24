function SearchKeyword(target, { search }) {
    this.$target = document.querySelector(target)

    this.$target.addEventListener('keyup', (e) => {
        search(e.target.value)
    });
}

export default SearchKeyword
