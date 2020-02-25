import { DEBOUNCE_TIME } from './constant.js';
import { validateElement } from './validator.js';
import { debounce } from './util.js';

function SearchInput(target, onKeyup) {
    this.onKeyup = onKeyup;
    this.$target = document.querySelector(target);
    validateElement(this.$target);

    this.render = () => {
        this.$target.addEventListener('keyup', debounce(this.onKeyup, DEBOUNCE_TIME));
    }

    this.render();
}

export default SearchInput
