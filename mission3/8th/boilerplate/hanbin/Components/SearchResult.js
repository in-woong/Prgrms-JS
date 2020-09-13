export default function earchResult(data, $target){

    this.data = data;
    this.$target = $target;

    this.prerender = () => {
        this.searchResult = document.createElement('div');
        this.searchResult.id = 'search-result';
        $target.appendChild(this.searchResult);
    }

    this.setState = (newData) => {
        this.data = newData;
        this.render();
    }

    this.render = () => {
        document.querySelector('#search-result').innerHTML = this.data;
    }

    this.prerender();
}
