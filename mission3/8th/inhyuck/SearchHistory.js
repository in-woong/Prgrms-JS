function SearchHistory({searchTexts}, target, onClickSearchText) {
    this.data = {searchTexts};
    this.$target = document.querySelector(target);
    this.$target.addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
            onClickSearchText({searchTextIndex: event.target.dataset.index});
        }
    });

    this.render = function() {
        this.$target.innerHTML = `
            <h3>Search History</h3>
            <ul>
                ${this.data.searchTexts.map((text, index) => `<li data-index="${index}">${text}</li>`).join('')}
            </ul>
        `;
    };

    this.setState = function({searchTexts}) {
        this.data = {searchTexts};
        this.render();
    };

    this.render();
}
