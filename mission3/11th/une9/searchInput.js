class SearchInput {
    constructor({target, onSearch}) {
        this.target = target;
        this.onSearch = onSearch;

        this.target.addEventListener('keyup', (e) => {
            onSearch(e.target.value);
        });
    }

    
}
