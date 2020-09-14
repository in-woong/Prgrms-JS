import { getDebounce } from './utils/debounce.js';

export default function SearchInput({searchText}, target, onKeyupSearchInput) {
    this.data = {searchText};
    this.$target = document.querySelector(target);

    const debounce = getDebounce({callbackFn: ({searchText}) => onKeyupSearchInput({searchText}), delay: 500});
    this.$target.addEventListener('keyup', event => {
        debounce({searchText: event.target.value});
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
