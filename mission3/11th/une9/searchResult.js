export class SearchResult {
    constructor(data, target) {
        this.data = data;
        this.target = target;
    }

    setState(data) {
        this.data = data;
        this.render(data);
    }

    render(data) {
        const htmlString = `${data
                                .map(d => `<img src="${d.imageUrl}">`)
                                .join('')}`;
        this.target.innerHTML = htmlString;
    }
}
