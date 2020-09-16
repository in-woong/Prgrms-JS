export default function SearchResult($target){

    this.$target = $target;

    this.prerender = () => {
        this.searchResult = document.createElement('div');
        this.searchResult.id = 'search-result';
        $target.appendChild(this.searchResult);
    }

    this.setState = (newData) => {
        //SearchResult의 this.data는 App this.data.searchedDatas
        this.data = newData;
        this.render();
    }

    this.render = () => {
        this.searchResult.innerHTML = 
            this.data.map(d => `<img src="${d.imageUrl}">`).join('');
    }

    this.prerender();
}
