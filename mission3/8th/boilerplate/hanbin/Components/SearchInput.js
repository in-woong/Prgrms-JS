export default function SearchInput($target, onKeyUpInput){

    this.$target = $target;
    this.onKeyUpInput = onKeyUpInput;

    this.prerender = () => {
        this.searchInput = document.createElement('input');
        this.searchInput.id = 'search-input';
        $target.appendChild(this.searchInput);
    }

    this.bindOnKeyUpEvent = () => {
        let timer;
        this.searchInput.addEventListener('keyup', () => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                if(this.searchInput.value !== ''){
                    this.onKeyUpInput(this.searchInput.value);
                }
            }, 1000);
        })
    }

    this.prerender();
    this.bindOnKeyUpEvent();
}
