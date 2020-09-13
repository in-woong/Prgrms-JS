export default function SearchInput($target, updateData){

    this.$target = $target;
    this.updateData = updateData;

    this.prerender = () => {
        const searchInput = document.createElement('input');
        searchInput.id = 'search-input';
        $target.appendChild(searchInput);
    }

    this.handleEvent = () => {
        const searchInput = document.querySelector("#search-input");
        let timer;
        searchInput.addEventListener('keyup', function(){
            //디바운스 구현
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                updateData(searchInput.value);
            }, 200);
        })


    }

    this.prerender();
    this.handleEvent();
}
