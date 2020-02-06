function SearchResult({$target, data}) {
    this.data;
    this.init = () => {
        this.data = data;
        this.render();
    }

    this.render = () => {
        $target.innerHTML = this.data.map(d => `
        <div class="img-wrapper">
            <img src="${d.imageUrl}" alt="${d.title}">
        </div>
        `).join('');
    }

    this.setState = newData => {
        this.data = newData;
        console.log(this.data);
        this.render();
    }

    this.init();
}

export default SearchResult;
