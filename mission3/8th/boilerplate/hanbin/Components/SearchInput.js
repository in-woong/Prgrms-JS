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
        searchInput.addEventListener('keyup', function(){
            updateData(searchInput.value);
        })
    }

    this.prerender();
    this.handleEvent();
}
