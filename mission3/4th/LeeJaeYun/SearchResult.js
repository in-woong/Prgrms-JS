class SearchResult {
    constructor(data, target) {
        this.data = data;
        this.target = target;
    }

    render() {
        const htmlString = this.data.map(v => `<img src = ${v.imageUrl} alt = ""/>`).join('');
        document.querySelector(this.target).innerHTML = htmlString;
    }

    setState(newData) {
        this.data = newData;
        this.render();
    }
}