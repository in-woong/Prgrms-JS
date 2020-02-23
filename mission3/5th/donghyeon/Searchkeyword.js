function SearchKeyword(target, { search }) {
    this.$target = document.querySelector(target)

    this.$target.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.value) {
            console.log(e.target.value)
            search(e.target.value)
        }
    });
}

export default SearchKeyword