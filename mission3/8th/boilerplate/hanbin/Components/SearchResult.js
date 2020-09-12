export default function earchResult(data, $target){

    this.data = data;
    this.$target = $target;

    this.prerender = () => {
        const searchResult = document.createElement('div');
        searchResult.id = 'search-result';
        $target.appendChild(searchResult);
    }

    this.setState = (newData) => {
        this.data = newData;
        this.render();
    }

    this.render = () => {
        document.querySelector('#search-result').innerHTML = this.data
    }

    this.prerender();
}
