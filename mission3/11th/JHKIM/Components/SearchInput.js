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
        this.$target = document.createElement('label');
        this.$target.innerHTML = `검색어 입력 : <input type="text"></input>`
        this.debouncedOnSearchInput = initDebouncer(onSearchInput, 500);

        this.$target.addEventListener('input', ({ target: { value } }) => {
            this.debouncedOnSearchInput(value);
        });

        $app.appendChild(this.$target);
    }

}
