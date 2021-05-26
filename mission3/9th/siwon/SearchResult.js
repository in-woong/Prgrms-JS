export default function SearchResult({ data, target }) {
    this.data = data;
    this.$searchResult = target;

    this.render = () => {
        console.log(`[SearchResult] ${this.data}`)
        const htmlString = `${this.data
            .map(d => `<img src="${d.imageUrl}">`)
            .join('')}`;
        this.$searchResult.innerHTML = htmlString;
    }

    this.setState = (nextData) => {
        this.data = nextData;
        this.render();
    }
}
