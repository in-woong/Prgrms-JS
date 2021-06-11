const initDebouncer = (callback, wait) => {
    let debounceTimer;
    return (params) => {
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        debounceTimer = setTimeout(() => {
            callback(params);
            clearTimeout(debounceTimer);
        }, wait);
    };
};


export default class SearchInput {
    constructor({ $app, onSearchInput }) {
        this.$target = document.createElement('input');
        this.debouncedOnSearchInput = initDebouncer(onSearchInput, 500);

        this.$target.addEventListener('input', ({ target }) => {
            this.debouncedOnSearchInput(target.value);
        });

        $app.appendChild(this.$target);
    }

}
