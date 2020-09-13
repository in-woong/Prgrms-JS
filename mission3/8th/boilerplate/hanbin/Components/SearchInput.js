export default function SearchInput($target, updateData, addHistory){

    this.$target = $target;
    this.updateData = updateData;

    this.prerender = () => {
        this.searchInput = document.createElement('input');
        this.searchInput.id = 'search-input';
        $target.appendChild(this.searchInput);
    }

    this.handleEvent = () => {
        let timer;
        this.searchInput.addEventListener('keyup', () => {
            //디바운스 구현
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                if(this.searchInput.value!==''){
                    updateData(this.searchInput.value);
                    addHistory(this.searchInput.value);
                }
            }, 200);
        })
    }

    this.prerender();
    this.handleEvent();
}
