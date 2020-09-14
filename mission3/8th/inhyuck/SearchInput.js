function SearchInput({searchText}, target, onKeyupSearchInput) {
    this.data = {searchText};
    this.$target = document.querySelector(target);

    this.render = function () {
        if (this.$target.innerHTML) {
            return;
        }

        this.$target.innerHTML = `
            <label for="search-keyword">움짤검색 키워드 : </label>
            <input id="search-keyword" />
        `;

        bindEvents();
    };

    this.setState = function ({searchText}) {
        this.data = {searchText};
        this.render();
    };

    const bindEvents = () => {
        const $searchKeyword = this.$target.querySelector('#search-keyword');
        $searchKeyword.addEventListener('keyup', event => {
            debounce({callbackFn: () => onKeyupSearchInput({searchText: event.target.value}), delay: 200});
        });
    };

    this.render();
}
