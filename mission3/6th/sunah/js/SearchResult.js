function SearchResult(selector, data = []) {
    this.data = data;
    this.$target = document.querySelector(selector);

    this.createInnerHTML = function() {
        const innerText = this.data.map(({title, imageUrl}, index) => {
            return `<li class="item">
                        <h3>${title}</h3>
                        <img src="${imageUrl}" >
                    </li>`;
        }).join('');

        return innerText;
    }

    this.setState = function(nextData) {
        this.data = nextData;
        this.render();
    };

    this.render = function() {
        this.$target.innerHTML = this.createInnerHTML();
    }
}