function SearchInput({searchText}, target, onKeyupSearchInput) {
    this.data = {searchText};
    this.$target = document.querySelector(target);
    this.$target.addEventListener('keyup', event => {
        debounce({callbackFn: () => onKeyupSearchInput({searchText: event.target.value}), delay: 500});
    });

    let $searchKeyword;

    this.render = function () {
        if (this.$target.innerHTML) {
            $searchKeyword.value = this.data.searchText;
            return;
        }
        this.$target.innerHTML = `
            <label for="search-keyword">움짤검색 키워드 : </label>
            <input id="search-keyword" value="${this.data.searchText}"/>
        `;

        $searchKeyword = this.$target.querySelector('#search-keyword');
    };

    this.setState = function ({searchText}) {
        this.data = {searchText};
        this.render();
    };

    this.render();
}
