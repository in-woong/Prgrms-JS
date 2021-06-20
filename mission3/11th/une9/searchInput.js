class SearchInput {
    constructor({target, onSearch}) {
        this.target = target;
        this.onSearch = onSearch;

        let timer;
        this.target.addEventListener('input', (e) => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                onSearch(e.target.value);
            }, 200);
        });
    }
}
