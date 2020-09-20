export default function SearchResult($target){

    this.$target = $target;

    this.prerender = () => {
        this.searchResult = document.createElement('ul');
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
            this.data.map(d => `<li><img alt ="jjal" src="${d.imageUrl}"></li>`).join('');
    }

    this.prerender();
}
