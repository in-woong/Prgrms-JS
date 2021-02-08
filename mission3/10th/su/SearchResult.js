class SearchResult {
    constructor(selector, state) {
        this.state = state;
        this.target = document.querySelector(selector);
        this.render();
    }

    validation = () => {

    }

    setState = (newState) => {
        this.state = newState;
        this.render();
    }

    render = () => {
        const htmlString = `${
            this.state
                .map(d => `<img src="${d.imageUrl}">`)
                .join('')
            }`
        this.target.innerHTML = htmlString;
    }
}

export default SearchResult;