class SearchResult {
    constructor(data, target) {
        this.data = data;
        this.target = target;
    }

    setState(data) {
        this.data = data;
        this.render(data);
    }

    render(data) {
        console.log(data)
        // console.log(JSON.stringify(data, null, 2))
        const htmlString = `${data
                                .map(d => `<img src="${d.imageUrl}">`)
                                .join('')}`;
        this.target.innerHTML = htmlString;
    }
}
