export function SearchResult({$searchResult, renderData}) {
    this.state = renderData;

    this.render = () => {
        const htmlString = `${this.state.map(data => `<img src="${data.imageUrl}">`).join('')}`
        $searchResult.innerHTML = htmlString;
    }

    this.setState = (data) => {
        this.state = data;
        this.render();
    }
}