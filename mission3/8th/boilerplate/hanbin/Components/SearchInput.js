import {debounce} from '../Util/debounce.js'

export default function SearchInput($target, onKeyUpInput){

    this.$target = $target;
    this.onKeyUpInput = onKeyUpInput;

    this.prerender = () => {
        this.searchInput = document.createElement('input');
        this.searchInput.id = 'search-input';
        $target.appendChild(this.searchInput);
    }

    this.bindOnKeyUpEvent = () => {
        this.searchInput.addEventListener('keyup', () => {
            debounce(async () => {
                if(this.searchInput.value !== ''){
                    this.onKeyUpInput(this.searchInput.value);
                }
            },500)
        })
    }

    this.prerender();
    this.bindOnKeyUpEvent();
}
