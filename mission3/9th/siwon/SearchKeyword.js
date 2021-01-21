export default function SearchKeyword({ onSearch, target }) {
    this.onSearch = onSearch;
    this.$searchInput = target;

    let timer;
    this.$searchInput.addEventListener('keyup', (e) => {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            if(e.target.value) {
                this.onSearch(e.target.value);
            }
        }, 300);
    })
}
