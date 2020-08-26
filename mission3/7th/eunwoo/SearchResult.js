class SearchResult {
    constructor (data, target) {
        this.data = data;
        this.target = target;

        this.render();
    }

    setState(data) {
        this.data = data;
        this.render();
    }

    render() {
        this.target.innerHTML = this.data;
    }
}