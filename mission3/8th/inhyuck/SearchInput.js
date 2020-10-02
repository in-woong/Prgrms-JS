import { makeDebouncedFn } from './utils/debounce.js';

/**
 * @param {object} props
 * @param {string} props.searchText
 * @param {string} target
 * @param {SearchInput~onKeyupSearchInput} onKeyupSearchInput
 * @constructor
 */
export default function SearchInput(props, target, onKeyupSearchInput) {
    this.data = props;
    this.$target = document.querySelector(target);

    const debouncedOnKeyUp = makeDebouncedFn({
        callbackFn: ({searchText}) => {
            if (searchText) {
                onKeyupSearchInput(searchText);
            }
        },
        delay: 500
    });
    this.$target.addEventListener('keyup', event => {
        debouncedOnKeyUp({searchText: event.target.value});
    });

    let $searchKeyword;

    this.render = function () {
        const {searchText} = this.data;

        if (this.$target.innerHTML) {
            $searchKeyword.value = searchText;
            return;
        }
        this.$target.innerHTML = `
            <label for="search-keyword">움짤검색 키워드 : </label>
            <input id="search-keyword" value="${searchText}"/>
        `;

        $searchKeyword = this.$target.querySelector('#search-keyword');
    };

    this.setState = function ({searchText}) {
        this.data = {searchText};
        this.render();
    };

    this.render();
}
