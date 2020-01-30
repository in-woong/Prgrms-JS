import { debounce } from '../utils.js';

function SearchInput({$target, onKeyup}) {
    this.$target = $target;
    this.lastKeyword = '';

    this.init = () => {
        $target.placeholder = '짤을 검색해보세요!';
        $target.addEventListener('keyup', debounce(onKeyup, 200));
    }

    this.init();
}

export default SearchInput;
